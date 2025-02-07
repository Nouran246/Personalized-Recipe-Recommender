import * as sql from 'mssql';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Ensure all required environment variables are set
if (!process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_SERVER) {
    throw new Error('Missing required database environment variables. Check your .env file.');
}

// Database connection configuration
const config: sql.config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE || "Persolized_Recomender",
    options: {
        encrypt: true,
        trustServerCertificate: false,
    },
};

// Create a reusable connection pool
let poolPromise: sql.ConnectionPool | null = null;

const connectToDatabase = async (): Promise<sql.ConnectionPool> => {
    try {
        if (!poolPromise) {
            poolPromise = await new sql.ConnectionPool(config).connect();
            console.log('✅ Connected to Azure SQL Database successfully!');
        }
        return poolPromise;
    } catch (err) {
        console.error('❌ Database connection failed:', err);
        process.exit(1); // Exit process with failure
    }
};

// Export the connection function
export { connectToDatabase, sql };
