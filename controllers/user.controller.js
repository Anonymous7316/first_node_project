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
 * Retrieves a user by their ID.
 *
 * @param {Object} req - The request object.
 * @param {Object} req.params - The request parameters.
 * @param {string} req.params.id - The ID of the user to retrieve.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the user data is sent in the response.
 * @throws {Error} - If an error occurs while retrieving the user data.
 */
export const getUserById = async(req,res) =>{
    try{
        const userData = await User.findById(req.params.id);
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
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body containing user data
 * @param {Object} res - Express response object
 * @returns {Promise<void>} - Returns a promise that resolves when user is created
 * @throws {Error} - Throws error if duplicate entry or validation fails
 * @description Handles user creation with error handling for duplicate entries and validation errors
 */
export const addUser = async (req,res)=>{
    console.log(req.body)
    try{
        await User.create(req.body);
        res.status(200).send("Data Inserted!");
    }
    catch(err){
        console.log(err);
        if(err.code === 11000){
            res.status(400).send({message:"Duplicate Entry!"})
        }
        else if(err.name === "ValidationError"){
            res.status(400).send({message:err.message})
        }
        else{
            res.status(400).send({message:err})
        }
    }
}




