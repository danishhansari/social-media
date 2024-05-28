import { Router } from "express";
import {
  registerUser,
  loginUser,
  userExist,
  getCurrentUser,
  searchUserProfile,
  newUserProfile,
  getUserTweet,
  followUser,
} from "../controller/user.controller.js";
import { verifyJWT } from "../middleware/jwt.middleware.js";
import {
  getTweet,
  postTweet,
  bookmarkTweet,
  getBookmark,
  deleteTweet,
} from "../controller/tweet.controller.js";

const user = Router();

// User Sign up and Sign in
user.post("/register", registerUser);
user.post("/login", loginUser);

user.post("/user-exist", userExist); // checking is user exist
user.post("/search", searchUserProfile); // search user profile
user.get("/new-user-profile", newUserProfile); // show the last 10 new user
user.get("/get-current-user", verifyJWT, getCurrentUser); // current user

user.post("/tweet", verifyJWT, postTweet);
user.get("/tweet", getTweet);
user.get("/:id/get-user-tweet", getUserTweet);

// Bookmark
user.post("/bookmark", verifyJWT, bookmarkTweet);
user.get("/get-bookmark", verifyJWT, getBookmark);

// Follow
user.patch("/follow", verifyJWT, followUser);
user.post("/delete-tweet", verifyJWT, deleteTweet);

export default user;
