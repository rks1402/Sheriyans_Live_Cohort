const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

connectToDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

// to get all the notes
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.json({
    message: "Notes fetched successfully",
    notes: notes,
  });
});

// to create a note in DB
app.post("/notes", async (req, res) => {
  const { title, content } = req.body;
  await noteModel.create({
    title: title,
    content: content,
  });
  res.json({
    message: "Note created successfully",
  });
});

// to update a note in DB
app.patch("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  const { title, content } = req.body;
  await noteModel.findOneAndUpdate(
    {
      _id: noteId,
    },
    {
      title: title,
      content: content,
    }
  );
  res.json({
    message: "Note updated successfully",
  });
});

// to delete a note from DB
app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  await noteModel.findOneAndDelete({
    _id: noteId,
  });
  res.json({
    message: "Note deleted successfully",
  });
});

app.listen(3500, () => {
  console.log("Server is running on port 3500");
});
