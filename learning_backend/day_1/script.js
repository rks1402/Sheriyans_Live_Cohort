const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from server!");
});

server.listen(3500, () => {
  console.log("Server is running on port 3500.");
});
