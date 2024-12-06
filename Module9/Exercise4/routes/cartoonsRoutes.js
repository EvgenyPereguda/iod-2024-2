const express = require('express');
const router = express.Router();

const cartoonsController = require("../controllers/cartoonsController");


router.get("/", (req, res) => {

    if (req.query.hasOwnProperty("cartoon"))
        cartoonsController.getCartoon(req, res);
    else        
        cartoonsController.getCartoons(req, res);
});


module.exports = router;