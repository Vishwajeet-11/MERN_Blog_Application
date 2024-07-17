import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    const regemail = await User.findOne({ email: email });
    const regusername = await User.findOne({ username: username });
    if (regemail) {
      next(errorHandler(400, "Email already registered"));
    }
    if (regusername) {
      next(errorHandler(400, "username already registered"));
    }

    const registeredUser = await User.create({ username, email, password });
    return res.status(200).json({
      success: "User created Successfully",
      registeredUser,
    });
  } catch (error) {
    next(error);
  }
};


export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are mandatory",
    });
  }

  try {
    const user = await User.findOne({ username }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).cookie('access-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production' 
    }).json({
      success: true,
      message: "User logged in successfully",
      user: user,
    });

  } catch (error) {
    console.log("Server error", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
