import updateUI from './scripts/updateUI.mjs';

// const WEATHER_API_KEY = 'b447455f727309cb68eac061b13af2d4';

// const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
//https://api.openweathermap.org/data/2.5/weather??zip={zipCode}&appid={api}&units=metric

async function getCountryWeather(postCode) {
  if (!postCode) return;

  try {
    const response = await fetch(
      `${WEATHER_BASE_URL}?zip=${postCode}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    if (!response.ok) throw new Error('Please Enter A Valid Country Code');

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

    updateUI(cityData);

    return cityData;
  } catch (error) {
    console.log(error);
  }
}

getCountryWeather('10025');
