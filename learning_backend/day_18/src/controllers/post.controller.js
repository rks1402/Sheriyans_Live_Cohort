const postModel = require("../models/post.model");
const generateCaption = require("../services/ai.service");

async function createPostController(req, res) {
  const file = req.file;

  const base64ImageFile = Buffer.from(file.buffer).toString("base64");

  const caption = await generateCaption(base64ImageFile);

  res.status(200).json({
    message: "Caption generated successfully",
    caption: caption,
  });
}

module.exports = {
  createPostController,
};
