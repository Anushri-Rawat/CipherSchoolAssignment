const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

const register = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists!Please login.");
  }
  const user = await User.create({ first_name, last_name, email, password });
  if (user) {
    res.status(200).json({
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    user.status(400);
    throw new Error("Invalid User data");
  }
});

const updateProfile = asyncHandler(async (req, res) => {
  const userExists = await User.findById(req.user._id).select("-password");
  if (userExists) {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        ...req.body,
        profile_image: req.body.profile_image || userExists.profile_image,
      },
      { returnDocument: "after" }
    );
    console.log(user);
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).select("-password").populate({
    path: "followers",
    select: "first_name last_name education followers profile_image",
  });
  if (user) res.status(200).json(user);
  else {
    res.status(404);
    throw new Error("User not found");
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  const user = await User.find({}).select("-password");
  if (user) res.status(200).json(user);
  else {
    res.status(400);
    throw new Error("No user exits");
  }
});

const updatePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new error("User not found");
  }
  const { currentPassword, newPassword } = req.body;
  if (!(await user.matchPassword(currentPassword, user.password))) {
    res.status(401);
    throw new Error("Your entered wrong password");
  }
  user.password = newPassword;
  await user.save();
  res.status(200).json("Password Successfully changed");
});
module.exports = {
  login,
  register,
  updatePassword,
  getProfile,
  updateProfile,
  getAllUsers,
};
