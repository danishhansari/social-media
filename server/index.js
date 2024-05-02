import express from "express";
import middleware from "./middleware/middleware.js";
import userRoute from "./route/user.route.js";
import { connectDB } from "./db/connect.db.js";

const app = express();
app.use(middleware);
app.use("/user", userRoute);

const PORT = process.env.PORT || 8000;
connectDB(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("DB Connected And Server Started", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });