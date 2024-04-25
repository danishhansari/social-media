import { Schema, model } from "mongoose";

const userSchema = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  friends: [
    {
      type: String,
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  picturePath: {},
  location: {
    type: String,
  },
  occupation: {
    type: String,
  },
  viewedProfile: {
    type: String,
  },
  impression: {
    type: Number,
    default: 0,
  },
});
