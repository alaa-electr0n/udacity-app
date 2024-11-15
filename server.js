//initiate express to run server and routes
const express = require('express');

const app = express();

//Dependencies
const bodyParser = require('body-parser');
// MiddleWare

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.json());

// CORS
const cors = require('cors');
app.use(cors());

const projectData = {};
// Setup Server
const port = 3000;

//initiate the main project folder which im calling website
app.use(express.static('website'));

// get the data on the server
app.post('/addWeatherData', (req, res) => {
  projectData.date = req.body.date;
  projectData.temp = req.body.temp;
  projectData.city = req.body.cityName;
  projectData.country = req.body.country;
  projectData.weather = req.body.weather;
  projectData.weatherDesc = req.body.weatherDesc;
  projectData.weatherIcon = req.body.weatherIcon;
  projectData.highTemp = req.body.highTemp;
  projectData.lowTemp = req.body.lowTemp;
  projectData.feelings = req.body.feelings;

  // send back the data to the frontend
  res.json(projectData);
});

//  get routes to get stored Data to update the UI
app.get('/getWeatherData', (req, res) => {
  console.log('Sending data:', projectData);
  res.json(projectData);
});

//callback function to debug
function listening() {
  console.log(`server running!`);
  console.log(`running on localhost: ${port}`);
}

//spin up the server
const server = app.listen(port, listening);
