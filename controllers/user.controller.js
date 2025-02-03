import axios from "axios";
import { User } from "../models/user.model.js";

/**
 * Retrieves all users from the database.
 * @async
 * @param {import('express').Request} req - Express request object.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>} - Sends a response with an array of user data.
 * @throws {Error} - If there's an error fetching users from the database.
 */
export const getUser = async(req,res) =>{
    //const userData = await axios('https://jsonplaceholder.typicode.com/users');//Instead define Mongoose Model
    try{
        const userData = await User.find({});
        res.status(200).send(userData);
    }
    catch(err){
        console.log(err)
        res.status(500).send({message:err})
    }
}

/**
 * Adds a new user to the database
 * @async
 * @param {import('express').Request} req - Express request object containing user data in the body
 * @param {import('express').Response} res - Express response object
 * @returns {Promise<void>} - Returns a promise that resolves when user is created
 * @throws {Error} - Throws an error if user creation fails
 */
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




