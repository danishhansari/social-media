import User from "../models/user.model.js";
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

const registerUser = async (req, res) => {
  const { name, email, dob, password } = req.body;

  // Zod Schema for input
  const nameSchema = z.string().min(3).trim();
  const emailSchema = z.string().email().min(3).trim();
  const passwordSchema = z.string().min(6).trim();
  const dobSchema = z.object({
    year: z.string().min(1),
    month: z.string().min(1),
    day: z.string().min(1),
  });

  //   Checking the zod verification
  try {
    nameSchema.parse(name);
    passwordSchema.parse(password);
    emailSchema.parse(email);
    dobSchema.parse(dob);

    let username = email.split("@")[0];
    username += nanoid().substring(0, 3);

    const { month, day, year } = dob;
    const dateString = `${month} ${day} ${year}`;
    const dateObject = new Date(dateString);
    const date = dateObject.toISOString();

    bcrypt.hash(password, 10, async (err, hashPassword) => {
      if (err) {
        return res.status(500).json(err);
      }
      const user = new User({
        name,
        username,
        email,
        dob: date,
        password: hashPassword,
      });

      const expiresDate = new Date();
      expiresDate.setDate(expiresDate.getDate() + 180);

      const options = {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        expires: expiresDate,
      };

      user
        .save()
        .then((newUser) => {
          const token = generateToken(newUser._id, newUser.email);
          newUser.password = undefined;
          return res.status(201).json({ newUser, token, options });
        })
        .catch((err) => {
          if (err.code === 11000) {
            return res.status(406).json("Email already exist");
          }
          return res.status(500).json({ "Internal server Error": err.message });
        });
    });
  } catch (err) {
    console.log(err.message);
    return res.status(400).json(err);
  }
};

const loginUser = async (req, res) => {
  const { email, password, username } = req.body;

  const usernameSchema = z.string().min(5).trim().toLowerCase().optional();
  const emailSchema = z.string().email().min(3).trim().optional();
  const passwordSchema = z.string().min(6).trim();

  if (!email && !username) {
    return res.status(401).json({ message: "Email or username is required" });
  }

  try {
    usernameSchema.parse(username);
    emailSchema.parse(email);
    passwordSchema.parse(password);

    const existUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (!existUser) {
      return res
        .status(401)
        .json({ message: "No user exist with this credentials" });
    }

    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + 180);

    const options = {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      expires: expiresDate,
    };

    bcrypt.compare(password, existUser.password).then((result) => {
      if (!result) {
        return res.status(401).json({ message: "Password is incorrect" });
      }
      const token = generateToken(existUser._id, existUser.email);
      return res
        .status(200)
        .cookie("token", token, options)
        .json({ message: "Logged in successful", token, options });
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

const generateToken = (id, email) => {
  const token = jwt.sign({ id, email }, process.env.JWTSECRET);
  return token;
};

const userExist = async (req, res) => {
  const { username, email } = req.body;

  const usernameSchema = z.string().min(3).trim().toLowerCase().optional();
  const emailSchema = z.string().email().min(3).trim().optional();

  if (!username && !email) {
    return res
      .status(401)
      .json({ message: "Username or either email is required" });
  }

  try {
    usernameSchema.parse(username);
    emailSchema.parse(email);

    const user = await User.exists({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return res
        .status(200)
        .json({ message: "user not exist", userExist: false });
    }

    return res.status(200).json({ message: "okay", userExist: true });
  } catch (err) {
    console.log(err);
    return res.status(403).json({ message: err.message });
  }
};

export { registerUser, loginUser, userExist };
