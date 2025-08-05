const express = require("express");
const userModel = require("../models/user.model");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hi from auth route",
  });
});

// user register api
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username: username,
    password: password,
  });

  res.status(201).json({
    message: "User registered successfully",
    user: user,
  });
});

// user login api
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });
  console.log(user);

  if (!user) {
    return res.status(401).json({
      message: "user account not found [ invalid username ]",
    });
  }

  const isPasswordValid = password == user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "invalid password",
    });
  }

  res.status(200).json({
    message: "User logged in successfully",
  });
});

module.exports = router;
