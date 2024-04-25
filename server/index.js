import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import authRouter from "./route/auth.route.js";
import userRouter from "./route/user.route.js";
import postRouter from "./route/post.route.js";
import middleware from "./middleware/middleware.js";

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
    });
  })
  .catch((err) => {
    console.log(err);
  });
