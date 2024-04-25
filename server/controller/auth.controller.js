import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 1000),
      impressions: Math.floor(Math.random() * 2000),
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser.id }, process.env.JWT_SECRET);
    savedUser.password = undefined;
    const options = {
      httpOnly: true,
      //   secure: true,
      expires: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
    };
    return res
      .status(200)
      .cookie("token", token, options)
      .json({ savedUser, token, options });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect Password" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    user.password = undefined;
    const options = {
      httpOnly: true,
      //   secure: true,
      expires: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
    };
    return res
      .status(200)
      .cookie("token", token, options)
      .json({ user, token, options });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { registerUser, loginUser };
