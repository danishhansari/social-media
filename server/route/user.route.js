import { Router } from "express";
import { registerUser, loginUser } from "../controller/user.controller.js";

const user = Router();

user.post("/register", registerUser);
user.post("/login", loginUser);

export default user;
