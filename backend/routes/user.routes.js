import express from "express";
import { getCurretnUser } from "../controllers/user.controllers.js";

const userRouter = express.Router();


userRouter.get("/current", getCurretnUser)
export default userRouter;
