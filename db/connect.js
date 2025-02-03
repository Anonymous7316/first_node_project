import mongoose from "mongoose";

const url = process.env.mongoDbURL;

export default async function connectDB(){
  try{
    await mongoose.connect(url);
    console.log("Connected DB Successful");
  }
  catch(err){
    throw "Error connecting DB";
  }
}
