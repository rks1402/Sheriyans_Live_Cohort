const express = require("express");
const indexRoutes = require("./routes/index.routes");

const app = express();
app.use(express.json()); // Application level middleware

app.use((req, res, next) => { // Application level middleware
  console.log("This middleware is between app and router");
  next();
});
app.use("/", indexRoutes);

module.exports = app;
