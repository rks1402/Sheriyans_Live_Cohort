const express = require("express");

const router = express.Router();

router.use((req, res, next) => { // Router level middleware
  console.log("This middleware is between router and api");
  next();
});

router.get("/", (req, res) => {
  console.log("Reached router api");
  res.json({
    message: "Learning middleware",
  });
});

module.exports = router;
