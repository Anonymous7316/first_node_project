import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    role:{type:String, require:true}
});