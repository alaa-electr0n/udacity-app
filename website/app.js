import {
  generateBtn,
  zipInput,
  feelingsInput,
  form,
} from './scripts/variables.mjs';
import updateUI from './scripts/updateUI.mjs';
import { changeBackground } from './scripts/changeBackground.mjs';

const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_APP_KEY = 'b447455f727309cb68eac061b13af2d4';

// Event listener for form submission
generateBtn.addEventListener('click', collectData);

async function collectData(e) {
  e.preventDefault();

  // Get zip code and feelings from the form
  const zipCode = zipInput?.value;
  const feelings = feelingsInput?.value;

  // Step 1: Get weather data
  const weatherData = await getCountryWeather(zipCode);

  // Step 2: Send combined data (weather + feelings) to the server
  if (weatherData) {
    const postData = { ...weatherData, feelings };
    await postDataToServer('/addWeatherData', postData); // Send to server
  }
}

// Function to fetch weather data
async function getCountryWeather(zipCode) {
  try {
    const response = await fetch(
      `${WEATHER_BASE_URL}?zip=${zipCode}&appid=${WEATHER_APP_KEY}&units=imperial`
    );

    if (!response.ok) throw new Error('Invalid zip code');

    const data = await response.json();
    const cityData = {
      cityName: data?.name,
      country: data?.sys?.country,
      weather: data?.weather[0]?.main,
      weatherDesc: data?.weather[0]?.description,
      weatherIcon: data?.weather[0]?.icon,
      temp: data?.main?.temp,
      highTemp: data?.main['temp_max'],
      lowTemp: data?.main['temp_min'],
      date: data?.dt,
    };
    return cityData;
  } catch (error) {
    console.log(error);
  }
}

// Function to send combined data to the server
async function postDataToServer(url = '', data = {}) {
  try {
    const response = await fetch(`http://localhost:3000${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    updateUI(result); // Update UI with server response
    form.reset(); // reset the form fields
    changeBackground(result?.weather?.toLowerCase()); // change the background acc. to weather
  } catch (error) {
    console.log('Error:', error);
  }
}
