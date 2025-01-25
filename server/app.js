// app.js
const express = require('express');
const sql = require('mssql');
const config = require('./src/functions/dbConfig'); // Import the database configuration

const app = express();

// Middleware, routes, etc.
app.use(express.json());

// Connect to the Azure SQL Database
sql.connect(config)
  .then(pool => {
    console.log('Connected to Azure SQL Database!');
    // Here you can perform your database queries, e.g., create tables or fetch data
  })
  .catch(err => {
    console.error('Error connecting to database:', err);
  });

// Example route (add more routes as needed)
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
