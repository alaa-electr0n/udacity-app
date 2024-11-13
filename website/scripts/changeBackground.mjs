export const changeBackground = (weatherCondition) => {
  const body = document.body;

  switch (weatherCondition) {
    case 'clear':
      body.style.backgroundImage = "url('./assets/weather-5.jpg')";
      break;
    case 'clouds':
      body.style.backgroundImage = "url('./assets/weather-4.jpg')";
      break;
    case 'rain':
      body.style.backgroundImage = "url('./assets/weather-7.jpg')";
      break;
    case 'cool':
      body.style.backgroundImage = "url('./assets/weather-2.jpg')";
      break;
    case 'warm':
      body.style.backgroundImage = "url('./assets/weather-3.jpg')";
      break;
    default:
      body.style.backgroundImage = "url('./assets/weather-1.jpg')";
  }

  body.style.backgroundSize = 'cover';
  body.style.backgroundPosition = 'center';
  body.style.backgroundRepeat = 'no-repeat';
};
