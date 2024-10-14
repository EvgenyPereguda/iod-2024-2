const express = require('express');
const router = express.Router();

const storeController = require("../controllers/storeController");

router.get("/categories", (req, res) => {
    storeController.getCategories(req, res);    
});

router.get("/items", (req, res) => {
    storeController.getItems(req, res);    
});



module.exports = router;