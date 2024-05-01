import User from "../models/user.model.js";
import { z } from "zod";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  const { name, email, dob, password, username } = req.body;
  console.log(name, email, password, username);
  // Zod Schema for input

  const nameSchema = z.string().min(3).trim();
  const usernameSchema = z.string().min(5).trim().toLowerCase();
  const emailSchema = z.string().email().min(3).trim();
  const passwordSchema = z.string().min(6).trim();
  const dobSchema = z.string().min(1); // Just for testing purpose it is String

  //   Checking the zod verification
  try {
    nameSchema.parse(name);
    passwordSchema.parse(password);
    emailSchema.parse(email);
    usernameSchema.parse(username);
    dobSchema.parse(dob);
  } catch (err) {
    console.log(err.message);
    return res.status(400).json(err);
  }
};

const loginUser = async (req, res) => {
  const { email, password, username } = req.body;
};

const generateToken = (id, email) => {
  const token = jwt.sign({ id, email }, process.env.JWTSECRET);
  return token;
};

export { registerUser, loginUser };
