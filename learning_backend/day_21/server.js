require("dotenv").config();
const app = require("./src/app");
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require("./src/services/ai.service");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  // custom event - message
  socket.on("ai-message", async (data) => {                   // .on - listen for the event
    console.log("Received message : ", data.prompt);
    const response = await generateResponse(data.prompt);
    console.log("AI Response : ", response);
    socket.emit("ai-message-response", { response });         // .emit - fires the event
  });
});

httpServer.listen(3500, () => {
  console.log("Server is running on port 3500");
});
