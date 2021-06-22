const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transaction.js");

transactions.get("/", (req, res) => {
  res.json(transactionsArray);
});

transactions.get("/:arrayIndex", (req, res) => {
  if (transactionsArray[req.params.arrayIndex]) {
    res.json(transactionsArray[req.params.arrayIndex]);
  } else {
    res.redirect("/404");
  }
});

transactions.post("/", (req, res) => {
    transactionsArray.push(req.body);
    res.json(transactionsArray[transactionsArray.length - 1]);
});

transactions.delete("/:arrayIndex", (req,res) => {
    const deletedTransactions = transactionsArray.splice(req.params.arrayIndex, 1)
    res.json(deletedTransactions)
})

transactions.put("/:arrayIndex", (req, res) => {
    transactionsArray[req.params.arrayIndex] = req.body;
    res.status(200).json(transactionsArray[req.params.arrayIndex]);
  });


module.exports = transactions;