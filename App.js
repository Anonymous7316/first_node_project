// Import required dependencies
import express from 'express';
import userRouter from './routes/user.routes.js';
import 'dotenv/config';
import connectDB from './db/connect.js';

// Initialize express application
const app = express();

// Get port number from environment variables
const PORT = process.env.PORT;

// Middleware setup
app.use(express.json());  // Parse JSON bodies in requests
app.use('/users', userRouter);  // Mount user routes at /users endpoint

// Connect to database and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at PORT ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
});


