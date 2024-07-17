import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // Ensure password is not selected by default
  },
}, {timestamps: true});

// Pre-save hook to hash the password before saving
userSchema.pre(
  "save",
  async function (next) {
    if (this.isModified("password") || this.isNew) {
      try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      } catch (err) {
        next(err);
      }
    } else {
      return next();
    }
  },
);

const User = mongoose.model("User", userSchema);

export default User;
