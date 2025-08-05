const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://admin:kTnWCsBGLeqzZ8SD@cluster0.5e6bw.mongodb.net/cohort"
    )
    .then(() => {
      console.log("Connected to DB");
    });
}

module.exports = connectToDB;
