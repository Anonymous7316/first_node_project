import axios from "axios";
import { User } from "../models/user.model.js";

export const getUser = async(req,res) =>{
    //const userData = await axios('https://jsonplaceholder.typicode.com/users');//Instead define Mongoose Model
    const userData = await User.find({});
    res.status(200).send(userData);
}

export const addUser = async (req,res)=>{
    console.log(req.body)
    try{
        await User.create(req.body);
        res.status(200).send("Data Inserted!");
    }
    catch(err){
        console.log(err)
        res.status(400).send({message:err})
    }
}




