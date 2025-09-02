require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/db/db");
const httpServer = require("http").createServer(app);
const initSocketServer = require("./src/sockets/socket.server");

connectToDB();
initSocketServer(httpServer);

httpServer.listen(3500, () => {
  console.log("Server is running on port 3500");
});
