const express = require("express");
const indexRoutes = require("./routes/index.routes");
const authRoutes = require("./routes/auth.routes");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs"); // defining this is an ejs application

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/", indexRoutes);
app.use("/auth", authRoutes);

module.exports = app;
