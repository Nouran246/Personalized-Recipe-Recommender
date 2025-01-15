const { app } = require('@azure/functions');

// Temporary in-memory "database" for demonstration
let users = [];

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

        // Check if the user already exists
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            return {
                status: 409,
                body: 'User already exists.',
            };
        }

        // Create a new user (this is just an example, passwords should be hashed in real apps)
        users.push({ username, password });

        return {
            status: 201,
            body: 'User signed up successfully!',
        };
    },
});

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

        // Check if the user exists and password matches
        const user = users.find(user => user.username === username);
        if (!user || user.password !== password) {
            return {
                status: 401,
                body: 'Invalid username or password.',
            };
        }

        return {
            status: 200,
            body: 'User signed in successfully!',
        };
    },
});
