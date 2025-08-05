// this code is written following the best practices like validation etc.

const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
  res.send("Welcome to the server.");
});

// to get all the notes
app.get("/notes", (req, res) => {
  res.send(notes);
});

// to create a note
app.post("/notes", (req, res) => {
  let { title, content } = req.body;
  title = title?.trim();
  content = content?.trim();

  if (!title || !content) {
    return res.status(400).json({ message: "Title and content are required!" });
  }
  const note = { title, content };
  notes.push(note);
  res.json({
    message: "Note received!",
    createdNote: note,
  });
});

// to update a note title
app.patch("/notes/:index", (req, res) => {
  const index = Number(req.params.index);
  if (index < 0 || index >= notes.length || !notes[index]) {
    return res.status(404).json({ message: "Note not found!" });
  }
  if (req.body.title?.trim()) {
    notes[index].title = req.body.title.trim();
  }
  if (req.body.content?.trim()) {
    notes[index].content = req.body.content.trim();
  }
  return res.json({
    message: "Note updated!",
    updatedNote: notes[index],
  });
});

// to delete a note
app.delete("/notes/:index", (req, res) => {
  const index = Number(req.params.index);
  if (index < 0 || index >= notes.length || !notes[index]) {
    return res.status(404).json({ message: "Note not found!" });
  }
  const deletedNote = notes.splice(index, 1)[0];
  return res.json({
    message: "Note deleted!",
    deletedNote: deletedNote,
  });
});

app.listen(3500, () => {
  console.log("Server is running on port 3500");
});

