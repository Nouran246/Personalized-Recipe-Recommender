// dbConfig.js
const sql = require('mssql');

// Configuration for SQL authentication
const config = {
  server: 'recipe-recommender-db.database.windows.net', // Your server name
  database: 'RecipeRecommendationDB',  // Your database name
  user: 'Admins',  // SQL admin username
  password: 'Admin123!',  // Your SQL password
  options: {
    encrypt: true,  // Encrypt the connection
    trustServerCertificate: false,  // Ensure certificate validation
    connectionTimeout: 60000,  // Timeout in milliseconds
    multipleActiveResultSets: false  // Disable if not required
  }
};

module.exports = config;
