const express = require("express");
const app = express();
require("dotenv").config();

let dbConnect = require("./dbConnect");

// parse requests of content-type -application/json
app.use(express.json());

app.use('/', express.static('public'))

let userRoutes = require('./routes/userRoutes');
let postRoutes = require('./routes/postRoutes');
let likeRoutes = require('./routes/likeRoutes');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/likes', likeRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`listening on http://localhost:${PORT}.`);
});