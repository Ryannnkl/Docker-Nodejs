const express = require("express");

const PORT = 4001;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.send("Hellow World");
});

app.listen(PORT, HOST);
