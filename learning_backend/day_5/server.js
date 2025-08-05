// today we are going to integrate mongoDB database with our notes app backend

const express = require("express");
const connectToDB = require("./src/db/db");

connectToDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to server.");
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);

  return res.json({
    message: "Note received",
  });
});

app.listen(3500, () => {
  console.log("Server is running on port 3500!");
});
