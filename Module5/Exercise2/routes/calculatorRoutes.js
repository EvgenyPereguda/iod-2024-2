const express = require('express');
const router = express.Router();

// new route for adding two numbers
router.get('/add', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
});

// new route for substructing two numbers
router.get('/sub', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = number1 - number2
    console.log(sub)
    res.status(200)
    res.json({result:sub})
});

// new route for dividing two numbers
router.get('/div', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let div = number1 / number2
    console.log(div)
    res.status(200)
    res.json({result:`${div}`})
});

// new route for multiplyng two numbers
router.get('/mult', (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let mult = number1 * number2
    console.log(mult)
    res.status(200)
    res.json({result:mult})
});

module.exports = router;