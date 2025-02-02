import axios from "axios";

export const getUser = async(req,res) =>{
    const userData = await axios('https://jsonplaceholder.typicode.com/users');//Instead define Mongoose Model
    res.status(200).send(userData.data);
}

export const addUser = (req,res)=>{
    console.log(req.body)
    res.status(200).send();
}




