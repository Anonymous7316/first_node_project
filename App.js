import express from 'express';
import userRouter from './routes/user.routes.js';
import 'dotenv/config';
import connectDB from './db/connect.js';

const app = express();
connectDB();

const PORT = process.env.PORT;

app.use(express.json());
app.use('/users',userRouter);

app.listen(PORT,()=>{
    console.log(`Listning at PORT ${PORT}`)
})


