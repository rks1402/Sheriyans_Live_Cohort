const { Server } = require("socket.io");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const aiService = require("../services/ai.service");
const userModel = require("../models/user.model");
const messageModel = require("../models/message.model");
const { createMemory, queryMemory } = require("../services/vector.service");

async function initSocketServer(httpServer) {
  const io = new Server(httpServer, {});

  // Socket.io auth middleware
  io.use(async (socket, next) => {
    const cookies = cookie.parse(socket.handshake.headers?.cookie || "");

    if (!cookies.token) {
      next(new Error("Authentication error: No token provided"));
    }

    try {
      const decoded = jwt.verify(cookies.token, process.env.JWT_SECRET);

      const user = await userModel.findById(decoded.id);
      if (!user) {
        return next(new Error("Authentication error: User not found"));
      }

      socket.user = user;

      next();
    } catch (error) {
      next(new Error("Invalid Token"));
    }
  });

  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("ai-message", async (messagePayload) => {
      const message = await messageModel.create({
        user: socket.user._id,
        chat: messagePayload.chat,
        content: messagePayload.content,
        role: "user",
      });

      const vectors = await aiService.generateVector(messagePayload.content);

      const memory = await queryMemory({
        queryVector: vectors,
        limit: 3,
        metadata: {},
      });

      console.log(memory);

      await createMemory({
        vectors,
        messageId: message._id,
        metadata: {
          chatId: messagePayload.chat,
          userId: socket.user._id,
          text: messagePayload.content,
        },
      });

      const chatHistory = (
        await messageModel
          .find({
            chat: messagePayload.chat,
          })
          .sort({ createdAt: -1 })
          .limit(20)
          .lean()
      ).reverse();

      const response = await aiService.generateResponse(
        chatHistory.map((message) => {
          return {
            role: message.role,
            parts: [
              {
                text: message.content,
              },
            ],
          };
        })
      );

      const responseMessage = await messageModel.create({
        user: socket.user._id,
        chat: messagePayload.chat,
        content: response,
        role: "model",
      });

      const responseVectors = await aiService.generateVector(response);

      await createMemory({
        vectors: responseVectors,
        messageId: responseMessage._id,
        metadata: {
          chatId: messagePayload.chat,
          userId: socket.user._id,
          text: response,
        },
      });

      socket.emit("ai-message-response", {
        content: response,
        chat: messagePayload.chat,
      });
    });

    socket.on("disconnect", (reason) => {
      console.log("User disconnected", reason);
    });
  });
}

module.exports = initSocketServer;
