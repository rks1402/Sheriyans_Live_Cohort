const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    username: username,
  }).select("-password -__v");

  console.log(isUserAlreadyExists);

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "username already exists",
    });
  }

  const user = await userModel.create({
    username: username,
    password: password,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res.status(201).json({
    message: "User created successfully",
    user: user,
    token: token,
  });
});

module.exports = router;
