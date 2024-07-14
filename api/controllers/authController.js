import bcrypt from "bcrypt";
import User from "../models/user.model.js";
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
      next(errorHandler(400, "Email already registered"))
    }
    if (regusername) {
      next(errorHandler(400, "username already registered"))
    }

    const registeredUser = await User.create({ username, email, password });
    return res.status(200).json({
      success: "User created Successfully",
      registeredUser,
    });
  } catch (error) {
    next(error)
  }
};


export const login = async (req, res) => {
  const {username, password} = req.body;

  if(!username || !password){
    return res.status(400).json({
      success: false,
      message: "all fields are mandatory"
    })
  }
  try {
   const user = await User.findOne({username}).select("+password");
  //  console.log("user>>>>>>>>>>>>>>>>>>>>>>>>>>>.", user)
   if(!user){
    return res.status(400).json({
      success:false,
      error: "email doesn't match"
    })
   }

   const isPassword = await bcrypt.compare(password, user.password);
  //  console.log("isPassword>>>>>>>..", isPassword);
   if(isPassword){
    return res.status(200).json({
      success: true,
      message: "user logged",
      user: user.username,
    })
   }
   if(!isPassword){
    return res.status(400).json({
      success: false,
      message: "password incorrect",
      user: user.username,
    })
   }
  } catch (error) {
    console.log('server error', error);
    return res.status(500).json({
      success:false,
      error: error,
    })
  }

}