import express from "express";
import isAuth from "../middlewares/isAuth.js";
import { getCurretnUser } from "../controllers/user.controllers.js";
const userRouter = express.Router();

userRouter.get("/current", isAuth, getCurretnUser);
export default userRouter;
