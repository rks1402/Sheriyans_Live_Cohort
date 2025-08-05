const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://admin:845tv96QYsxHYBBN@cluster0.fqljxnj.mongodb.net/cohort"
    )
    .then(() => {
      console.log("Connected to DB");
    });
}

module.exports = connectToDB;
