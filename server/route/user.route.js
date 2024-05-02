import { Router } from "express";
import {
  registerUser,
  loginUser,
  userExist,
} from "../controller/user.controller.js";

const user = Router();

user.post("/register", registerUser);
user.post("/login", loginUser);
user.post("/user-exist", userExist);

export default user;
