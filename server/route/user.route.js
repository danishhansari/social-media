import { Router } from "express";
import {
  registerUser,
  loginUser,
  userExist,
  getCurrentUser,
  searchUserProfile,
} from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/jwt.middleware.js";

const user = Router();

user.post("/register", registerUser);
user.post("/login", loginUser);
user.post("/user-exist", userExist);
user.post("/search", searchUserProfile);
user.get("/get-current-user", verifyJWT, getCurrentUser);

export default user;
