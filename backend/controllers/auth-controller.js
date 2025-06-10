import User from "../models/User.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email address already in use",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      name,
      password: hashedPassword,
    });

    res.status(201).json({
      message:
        "Verification email sent to your email address, please check and verify your email address.",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const loginUser = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export { registerUser, loginUser };
