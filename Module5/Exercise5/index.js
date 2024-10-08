const express = require('express')
const app = express(); // create a new app
const port = 3000; // change this to run the app on a different port - usually a 4 digit number


app.use('/', express.static('public'))

const calculatorRoutes = require('./routes/calculatorRoutes');

// map the calculator routes to our app
app.use('/calculator', calculatorRoutes);

// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

