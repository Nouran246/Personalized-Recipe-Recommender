const { app } = require('@azure/functions');
const sql = require('mssql');
const dbConfig = require('./functions/dbConfig');

// Setup function settings if required
app.setup({
    enableHttpStream: true,
});

// Function to test the database connection
async function testDbConnection() {
    try {
        await sql.connect(dbConfig);
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
    }
}

// Call the function to test the connection
testDbConnection();
