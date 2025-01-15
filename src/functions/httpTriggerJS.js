const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos');
const bcrypt = require('bcryptjs');

// Cosmos DB configuration
const cosmosConfig = {
    endpoint: process.env.COSMOS_DB_ENDPOINT,  // Set in Azure App Settings
    key: process.env.COSMOS_DB_KEY,            // Set in Azure App Settings
    databaseId: process.env.COSMOS_DB_DATABASE_ID,  // Set in Azure App Settings
    containerId: 'Users',  // Name of the container in Cosmos DB for user data
};

// Initialize Cosmos Client
const client = new CosmosClient({ endpoint: cosmosConfig.endpoint, key: cosmosConfig.key });
const database = client.database(cosmosConfig.databaseId);
const container = database.container(cosmosConfig.containerId);

// Sign-up Function
app.http('signUp', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Sign-up request received');

        const requestBody = await request.json();
        const { username, password } = requestBody;

        if (!username || !password) {
            return {
                status: 400,
                body: 'Username and password are required.',
            };
        }

        // Check if the user already exists in Cosmos DB
        try {
            const { resources } = await container.items.query({
                query: "SELECT * FROM Users u WHERE u.username = @username",
                parameters: [{ name: "@username", value: username }],
            }).fetchAll();

            if (resources.length > 0) {
                return {
                    status: 409,
                    body: 'User already exists.',
                };
            }

            // Hash the password before saving to the database
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert the new user into Cosmos DB
            const newUser = {
                id: username,  // Using username as the unique ID
                username,
                password: hashedPassword,
            };

            await container.items.create(newUser);

            return {
                status: 201,
                body: 'User signed up successfully!',
            };

        } catch (error) {
            context.log(`Error during sign-up: ${error}`);
            return {
                status: 500,
                body: 'Internal server error.',
            };
        }
    },
});

// Sign-in Function
app.http('signIn', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Sign-in request received');

        const requestBody = await request.json();
        const { username, password } = requestBody;

        if (!username || !password) {
            return {
                status: 400,
                body: 'Username and password are required.',
            };
        }

        // Fetch the user from Cosmos DB
        try {
            const { resources } = await container.items.query({
                query: "SELECT * FROM Users u WHERE u.username = @username",
                parameters: [{ name: "@username", value: username }],
            }).fetchAll();

            if (resources.length === 0) {
                return {
                    status: 401,
                    body: 'Invalid username or password.',
                };
            }

            const user = resources[0];

            // Compare the provided password with the hashed password in the database
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return {
                    status: 401,
                    body: 'Invalid username or password.',
                };
            }

            return {
                status: 200,
                body: 'User signed in successfully!',
            };

        } catch (error) {
            context.log(`Error during sign-in: ${error}`);
            return {
                status: 500,
                body: 'Internal server error.',
            };
        }
    },
});
