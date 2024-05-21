import { Router } from "express";
import {
  registerUser,
  loginUser,
  userExist,
  getCurrentUser,
  searchUserProfile,
  newUserProfile,
} from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/jwt.middleware.js";
import { getTweet, postTweet } from "../controller/tweet.controller.js";

const user = Router();

// User Sign up and Sign in
user.post("/register", registerUser);
user.post("/login", loginUser);

user.post("/user-exist", userExist); // checking is user exist
user.post("/search", searchUserProfile); // search user profile
user.get("/new-user-profile", newUserProfile); // show the last 10 new user
user.get("/get-current-user", verifyJWT, getCurrentUser); // current user
user.post("/tweet", verifyJWT, postTweet);
user.get("/tweet", verifyJWT, getTweet);

export default user;
