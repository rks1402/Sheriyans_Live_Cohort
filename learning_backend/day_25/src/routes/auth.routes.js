const express = require("express");
const {
  getRegisterController,
  postRegisterController,
  getLoginController,
  postLoginController,
  getLogoutController,
} = require("../controllers/auth.controller");

const router = express.Router();

// router.get("/register", getRegisterController);
// router.post("/register", postRegisterController);

router
  .route("/register")
  .get(getRegisterController)
  .post(postRegisterController);

router.route("/login").get(getLoginController).post(postLoginController);

router.route("/logout").get(getLogoutController);

module.exports = router;
