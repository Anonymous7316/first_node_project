import express from 'express';
import userRouter from './routers/user.router.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/users',userRouter);

app.listen(PORT,()=>{
    console.log(`Listning at PORT ${PORT}`)
})


