import mongoose from "mongoose";

/**
 * Mongoose schema definition for User model
 * @typedef {Object} UserSchema
 * @property {string} name - The unique name of the user (required)
 * @property {string} role - The role assigned to the user (required)
 */
export const UserSchema = new mongoose.Schema({
    name:{type:String, required:true, unique: true},
    role:{type:String, require:true}
});