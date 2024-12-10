// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // To load environment variables from .env file

const app = express();
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// MongoDB event listeners for errors and disconnections
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected! Trying to reconnect...');
});

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Node.js server!');
});

// Define additional routes as needed, for example:
app.get('/api/items', (req, res) => {
  // Example route to fetch items from MongoDB
  res.json([{ name: 'Item 1' }, { name: 'Item 2' }]);
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
