const { Server } = require("socket.io");
const aiService = require("../services/ai.service");

function setupSocketServer(httpServer) {
  const io = new Server(httpServer, {});

  io.on("connection", (socket) => {
    console.log("A user connected.");

    socket.on("ai-message", async (data) => {
      const response = await aiService.generateContent(data);

      socket.emit("ai-message-response", response);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });
}

module.exports = setupSocketServer;
