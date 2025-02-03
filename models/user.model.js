import mongoose from "mongoose";
import { UserSchema } from "../schemas/user.schema.js";

/**
 * Represents the User model in the database.
 * @constant {import('mongoose').Model<any>} User
 * @exports User
 */
export const User = mongoose.model('Users', UserSchema);
