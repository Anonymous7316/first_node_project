import { Router } from "express";
import { getUser, addUser } from "../controllers/user.controller.js";
import { validateUserData } from "../middlewares/user.middleware.js";

const userRouter = Router();

userRouter.get('/', getUser).post('/addUser', validateUserData, addUser);

export default userRouter;