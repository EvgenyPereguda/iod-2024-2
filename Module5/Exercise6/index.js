
const app = require('./app');
const port = 3000; // change this to run the app on a different port - usually a 4 digit number


// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
