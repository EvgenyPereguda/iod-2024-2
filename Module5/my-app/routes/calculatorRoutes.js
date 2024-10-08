const express = require("express");
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

// // new route for adding two numbers
// router.get("/add", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);
//   let sum = number1 + number2;
//   res.status(200);
//   res.json({ result: sum });
// });

// new route for subtracting two numbers
// router.get("/sub", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);
//   let diff = number1 - number2;
//   res.status(200);
//   res.json({ result: diff });
// });

// new route for dividing two numbers
// router.get("/div", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);
//   res.status(200);

//   try {
//     let div = number1 / number2;
//     res.json({ result: `${div}` });
//   } catch (err) {
//     res.json({ result: err });
//   }
// });

// new route for multiplying two numbers
// router.get("/mult", (req, res) => {
//   let number1 = parseInt(req.query.num1);
//   let number2 = parseInt(req.query.num2);
//   res.status(200);
//   try {
//     let mult = number1 * number2;
//     res.json({ result: mult });
//   } catch (err) {
//     res.json({ result: err });
//   }
// });

module.exports = router;
