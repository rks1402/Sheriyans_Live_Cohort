require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/services/ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: "http://localhost:5173"
});

const chatHistory = [];

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  // custom event - ai-message
  socket.on("ai-message", async (data) => {
    // .on - listen for the event
    console.log("Received message : ", data);

    chatHistory.push({
      role: "user",
      parts: [{ text: data }],
    });
    const response = await generateResponse(chatHistory);

    chatHistory.push({
      role: "model",
      parts: [{ text: response }],
    });
    console.log("AI Response : ", response);
    socket.emit("ai-message-response", response); // .emit - fires the event
  });
});

httpServer.listen(3500, () => {
  console.log("Server is running on port 3500");
});
