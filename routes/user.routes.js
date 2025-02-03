import { Router } from "express";
import { getUser, getUserById, addUser } from "../controllers/user.controller.js";
import { validateUserData } from "../middlewares/user.middleware.js";

const userRouter = Router();

userRouter.get('/', getUser).get('/:id', getUserById).post('/addUser', validateUserData, addUser);

export default userRouter;