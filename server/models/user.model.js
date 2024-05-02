import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    dob: {
      type: Date,
    },
    password: {
      type: String,
    },
    googleAuth: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
