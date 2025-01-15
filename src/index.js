const { app } = require('@azure/functions');

// Setup function settings if required (e.g., enabling streaming or specific configurations)
app.setup({
    enableHttpStream: true,
});

// Import the HTTP-trigger functions (signUp and signIn)
require('./httpTriggerJS.js'); // Ensure that the path matches where your httpTriggerJS.js is located
