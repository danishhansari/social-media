import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import authRouter from "./route/auth.route.js";
import userRouter from "./route/user.route.js";
import postRouter from "./route/post.route.js";
import middleware from "./middleware/middleware.js";
import User from "./models/user.model.js";
import Post from "./models/post.model.js";
import { users, posts } from "./data/index.js";

// Configuration
dotenv.config();

const app = express();

// All middlewares
app.use(middleware);

// Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

const PORT = process.env.PORT || 8000;

// Db connection then listen to port
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is running fine", PORT);

      // Mock data for checking
      // User.insertMany(users);
      // Post.insertMany(posts);
    });
  })
  .catch((err) => {
    console.log(err);
  });
