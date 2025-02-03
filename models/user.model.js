import mongoose from "mongoose";
import { UserSchema } from "../schemas/user.schema.js";

export const User = mongoose.model('Users', UserSchema);
