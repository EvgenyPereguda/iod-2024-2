const express = require("express"); // import the express package
const app = express(); // create a new app
const storeRoutes = require('./routes/storeRoutes');


// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

app.use('/', express.static('../client'));

// map the store routes to our app
app.use('/store', storeRoutes);

// export the app
module.exports = app;