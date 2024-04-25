import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2, 
      max: 50,
    },
    lastName: {
      type: String,
      min: 2,
      max: 50,
    },
    friends: {
      type: Array,
      default: [],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: {
      type: String,
    },
    occupation: String,
    viewedProfile: Number,
    impression: Number,
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
