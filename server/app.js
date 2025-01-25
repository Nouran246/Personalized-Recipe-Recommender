const express = require('express');
const sql = require('mssql');
const bcrypt = require('bcryptjs');
const dbConfig = require('../src/functions/dbConfig'); // Ensure this path is correct

const app = express();
const cors = require('cors');
app.use(cors());  // Allow all origins, or configure it for specific domains

// Middleware
app.use(express.json());

// Connect to the Azure SQL Database once (reusable connection pool)
let pool;
const connectToDb = async () => {
  try {
    pool = await sql.connect(dbConfig);  // Store the connection pool for later reuse
    console.log('Connected to Azure SQL Database!');
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);  // Exit the process if the DB connection fails
  }
};

// Call connect function
connectToDb();

// Signup Route
app.post('/Signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Validate input
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if pool is available
    if (!pool) {
      return res.status(500).json({ error: 'Database connection not available.' });
    }

    const request = pool.request();
    await request
      .input('firstName', sql.NVarChar(50), firstName)
      .input('lastName', sql.NVarChar(50), lastName)
      .input('email', sql.NVarChar(100), email)
      .input('passwordHash', sql.NVarChar(256), hashedPassword)
      .query(`
        INSERT INTO Users (FirstName, LastName, Email, PasswordHash)
        VALUES (@firstName, @lastName, @email, @passwordHash)
      `);

    res.status(201).json({ message: 'User signed up successfully!' });
  } catch (err) {
    console.error('Error inserting user:', err);

    // Handle duplicate email error (SQL Server error code for unique constraint violation is 2627)
    if (err.number === 2627) {
      return res.status(409).json({ error: 'Email already exists.' });
    }

    res.status(500).json({ error: 'An error occurred while signing up.' });
  }
});

// Example route (for testing)
app.get('/', (req, res) => {
  res.send('Hello from back end');
});

// Handle server shutdown
process.on('SIGINT', async () => {
  if (pool) {
    await pool.close();
    console.log('Closed DB connection.');
  }
  process.exit();
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
