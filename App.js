import express from 'express';
import userRouter from './routes/user.routes.js';
import 'dotenv/config';
import connectDB from './db/connect.js';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use('/users', userRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening at PORT ${PORT}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
});


