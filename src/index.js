const { app } = require('@azure/functions');
const bcrypt = require('bcrypt');
const { TableClient, AzureNamedKeyCredential } = require("@azure/data-tables");

// Set up Azure Storage connection
const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME || "<your-account-name>";
const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY || "<your-account-key>";
const tableName = "Users";
const credential = new AzureNamedKeyCredential(accountName, accountKey);
const client = new TableClient(`https://${accountName}.table.core.windows.net`, tableName, credential);

// Azure Active Directory (Azure AD) for token management
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET || "<your-secret-key>";

app.http('SignUp', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const { email, password } = await request.json();

        if (!email || !password) {
            return { status: 400, body: "Email and password are required." };
        }

        try {
            // Check if user already exists
            const existingUser = await client.getEntity('Users', email); // Using email as partition key
            if (existingUser) {
                return { status: 409, body: "User already exists." };
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Store user data
            await client.createEntity({
                partitionKey: email,
                rowKey: email,  // Row key is the email in this case
                password: hashedPassword
            });

            return { status: 201, body: "User signed up successfully." };
        } catch (err) {
            if (err.message.includes("The specified entity was not found")) {
                // Proceed if user doesn't exist
                return { status: 500, body: "Error signing up: " + err.message };
            }
            return { status: 500, body: "Error signing up: " + err.message };
        }
    }
});

app.http('SignIn', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        const { email, password } = await request.json();

        if (!email || !password) {
            return { status: 400, body: "Email and password are required." };
        }

        try {
            // Retrieve user data from Azure Table Storage
            const user = await client.getEntity('Users', email);
            if (!user || !(await bcrypt.compare(password, user.password))) {
                return { status: 401, body: "Invalid email or password." };
            }

            // Generate JWT token for authenticated user
            const token = jwt.sign({ id: user.rowKey, email: user.partitionKey }, jwtSecret, { expiresIn: '1h' });

            return { status: 200, body: { message: "Sign-in successful", token } };
        } catch (err) {
            return { status: 500, body: "Error signing in: " + err.message };
        }
    }
});
