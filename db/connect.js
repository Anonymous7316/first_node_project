import mongoose from "mongoose";

const url = process.env.mongoDbURL;

/**
 * Establishes a connection to the MongoDB database using mongoose
 * @async
 * @function connectDB
 * @throws {string} Throws an error message if the connection fails
 * @returns {Promise<void>} A promise that resolves when the connection is successful
 */
export default async function connectDB(){
  try{
    await mongoose.connect(url);
    console.log("Connected DB Successful");
  }
  catch(err){
    throw "Error connecting DB";
  }
}
