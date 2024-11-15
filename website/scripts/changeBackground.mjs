import { main } from './variables.mjs';

export const changeBackground = (weatherCondition) => {
  switch (weatherCondition) {
    case 'clear':
      main.style.backgroundImage = "url('./assets/weather-5.jpg')";
      break;
    case 'clouds':
      main.style.backgroundImage = "url('./assets/weather-4.jpg')";
      break;
    case 'rain':
      main.style.backgroundImage = "url('./assets/weather-7.jpg')";
      break;
    case 'cool':
      main.style.backgroundImage = "url('./assets/weather-2.jpg')";
      break;
    case 'warm':
      main.style.backgroundImage = "url('./assets/weather-3.jpg')";
      break;
    default:
      main.style.backgroundImage = "url('./assets/weather-1.jpg')";
  }
};
