const express = require('express');
const router = express.Router();

const calculatorController = require("../controllers/calculatorController");

router.get("/add", (req, res) => {
  calculatorController.addNumbers(req, res);
});

router.get("/sub", (req, res) => {
  calculatorController.subNumbers(req, res);
});

router.get("/div", (req, res) => {
  calculatorController.divNumbers(req, res);
});

router.get("/mult", (req, res) => {
  calculatorController.multNumbers(req, res);
});

module.exports = router;