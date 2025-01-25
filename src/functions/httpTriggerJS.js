const { app } = require('@azure/functions');
const bcrypt = require('bcryptjs');
const { Connection, Request } = require('tedious'); // For SQL Database connection

// SQL DB Configuration
const sqlConfig = {
    server: process.env.SQL_DB_SERVER,  // Set in Azure App Settings
    authentication: {
        type: 'default',
        options: {
            userName: process.env.SQL_DB_USERNAME, // Set in Azure App Settings
            password: process.env.SQL_DB_PASSWORD  // Set in Azure App Settings
        }
    },
    options: {
        database: process.env.SQL_DB_NAME, // Set in Azure App Settings
        encrypt: true,
    }
};

