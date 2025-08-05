const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, // schema level validation
    required: true, // schema level validation
  },
  password: {
    type: String,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
