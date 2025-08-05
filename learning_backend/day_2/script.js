const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express server!");
});

app.get("/home", (req, res) => {
  /* 
    req is an object containing details about the request from the client.

    req.body
    req.query
    req.params

    req.headers & req.cookies

  */

  /*
    res is an object used to send data back to client.

    res.send()
    res.json()
    res.status()
  */
  res.send("Welcome to the home page.");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about page.");
});

app.listen(3500, () => {
  console.log("Server is running on port 3500.");
});
