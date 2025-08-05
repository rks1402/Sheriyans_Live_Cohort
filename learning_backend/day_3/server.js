const express = require("express");

const app = express();

app.use(express.json()); // built-in middleware that enables express to read req.bodys

let notes = [];

/* /notes => title & description */

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "Note added successfully",
    notes: notes
  })
});

app.listen(3500, () => {
  console.log("Server is running on port 3500.");
});
