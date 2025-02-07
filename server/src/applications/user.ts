import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { connectToDatabase, sql } from '../config/db';

dotenv.config(); // Load environment variables

// Use secret key from environment variables
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in the environment variables.');
}

// Generate JWT Token
const generateToken = (userId: number, isAdmin: boolean) => {
  return jwt.sign({ userId, isAdmin }, JWT_SECRET, { expiresIn: '1h' });
};

// ✅ Create User (Registration)
export const CreateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ error: 'All fields are required.' });
      return;
    }

    const pool = await connectToDatabase();

    // Check if user already exists
    const existingUser = await pool
      .request()
      .input('email', sql.NVarChar, email)
      .query('SELECT * FROM Users WHERE email = @email');

    if (existingUser.recordset.length > 0) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user into the database (default isAdmin = 0)
    await pool
      .request()
      .input('FirstName', sql.NVarChar, firstName)
      .input('LastName', sql.NVarChar, lastName)
      .input('Email', sql.NVarChar, email)
      .input('Password', sql.NVarChar, hashedPassword)
      .input('isAdmin', sql.Bit, 0)
      .query(`
        INSERT INTO Users (FirstName, LastName, Email, Password, isAdmin)
        VALUES (@FirstName, @LastName, @Email, @Password, @isAdmin)
      `);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// ✅ Login User
export const LoginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }

    const pool = await connectToDatabase();

    // Query user
    const result = await pool
      .request()
      .input('Email', sql.NVarChar, email)
      .query('SELECT * FROM Users WHERE Email = @Email');

    if (result.recordset.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const user = result.recordset[0];

    // Check password
    const isMatch = bcrypt.compareSync(password, user.Password);
    if (!isMatch) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // Generate JWT token
    const token = generateToken(user.UserID, user.isAdmin);

    res.status(200).json({
      message: 'Login successful',
      token,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// ✅ Promote User to Admin (Only Admins Allowed)
export const MakeAdmin = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ error: 'Unauthorized: No token provided' });
      return;
    }

    const token = authHeader.split(' ')[1]; // Extract JWT token
    console.log('Extracted token:', token);

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as { userId: number; isAdmin: boolean };

      if (!decoded.isAdmin) {
        res.status(403).json({ error: 'Forbidden: Only admins can promote users' });
        return;
      }

      const pool = await connectToDatabase();

      // Check if user exists
      const user = await pool
        .request()
        .input('email', sql.NVarChar, email)
        .query('SELECT * FROM Users WHERE Email = @email');

      if (user.recordset.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      // Update user to admin
      await pool
        .request()
        .input('email', sql.NVarChar, email)
        .query('UPDATE Users SET isAdmin = 1 WHERE Email = @email');

      res.status(200).json({ message: 'User promoted to admin successfully' });
    } catch (err) {
      console.error('JWT Verification Error:', err);
      res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
  } catch (error) {
    console.error('Error promoting user to admin:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default { CreateUser, LoginUser, MakeAdmin };
