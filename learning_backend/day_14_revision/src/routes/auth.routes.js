const express = require("express");
const userModel = require("..//models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

// user register api
router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    username: username,
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "username already in use",
    });
  }

  const user = await userModel.create({
    username: username,
    password: password,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  }); // adds the token into browser cookies

  res.status(201).json({
    message: "User created successfully",
    user: user,
    token: token,
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });

  console.log(user);

  if (!user) {
    return res.status(401).json({
      message: "User not found - incorrect username",
    });
  }

  const isPasswordValid = password == user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "incorrect password",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
  });

  res.status(200).json({
    message: "User login successful",
  });
});

router.get("/user", async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel
      .findOne({
        _id: decoded.id,
      })
      .select("-password -__v");

    res.status(200).json({
      message: "User fetched successfully",
      user: user,
    });
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized - invalid token",
    });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");

  res.status(200).json({
    message: "user logged out successfull",
  });
});

module.exports = router;
