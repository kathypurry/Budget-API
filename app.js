const express = require("express");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Kathypurry's Budgeting App");
});

module.exports = app;
