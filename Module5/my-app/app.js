// app.js - new file at top level
const express = require('express')
const app = express()


// import all calculator routes (up the top)
const calculatorRoutes = require('./routes/calculatorRoutes');

app.use(express.json());

app.use('/', express.static('public'))

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

// import all user routes (up top in index.js)
const userRoutes = require('./routes/userRoutes');
// map the user routes to our app
app.use('/users', userRoutes);

// export the app
module.exports = app;