const express = require("express"); // import the express package
const app = express(); // create a new app
const calculatorRoutes = require('./routes/calculatorRoutes');


// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

app.use('/', express.static('public'))

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

// export the app
module.exports = app;