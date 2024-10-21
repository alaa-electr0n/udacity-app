//initiate express to run server and routes
const express = require('express');

const app = express();

//Dependencies
const bodyParser = require('body-parser');
// MiddleWare

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// CORS
const cors = require('cors');
app.use(cors());

// Setup Server
const port = 3000;

//spin up the server
const server = app.listen(port, listening);

//callback function to debug
function listening() {
  console.log(`server running!`);
  console.log(`running on localhost: ${port}`);
}

//initiate the main project folder which im calling website
app.use(express.static('website'));
