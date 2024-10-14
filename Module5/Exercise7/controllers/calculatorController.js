const Calculator = require("../libraries/Calculator");

let myCalc = new Calculator();

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let sum = myCalc.add(number1,number2);
  res.status(200);
  res.json({ result: sum });
};

const subNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let diff = myCalc.sub(number1,number2);
  res.status(200);
  res.json({ result: diff });
};

const divNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  res.status(200);

  try {
    let div = myCalc.div(number1,number2);
    res.json({ result: `${div}` });
  } catch (err) {
    res.json({ result: err });
  }
};

const multNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  res.status(200);
  try {
    let mult = myCalc.mult(number1,number2);
    res.json({ result: mult });
  } catch (err) {
    res.json({ result: err });
  }
};

module.exports = {
  addNumbers,
  subNumbers,
  divNumbers,
  multNumbers
};
