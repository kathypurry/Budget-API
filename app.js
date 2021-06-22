const express = require("express");
const cors = require("cors");
const app = express();
const transactionsController = require("./controllers/transactionsController.js");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Kathypurry's Pokémon Trainer Budgeting App!!");
});

app.use("/transactions", transactionsController);


app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
