import { formatDate } from './utils.mjs';
import { main } from './variables.mjs';
export default function updateUI(obj) {
  const html = `
  <section class="output output--show">
          <div class="output__temperature--container">
            <div class="output__temperature--actual">
              <h2 class="output__temperature--number heading-2">
                ${
                  obj?.temp
                } <span class="output__temperature--unit"> &#8457;</span>
              </h2>
              <img class="output__temperature--icon" src="http://openweathermap.org/img/w/${
                obj?.weatherIcon
              }.png" />
            </div>
            <p class="output__temperature--description">${obj?.weatherDesc}</p>
            <div class="output__temperature--range">
              <p class="output__temperature--min">
                ${
                  obj?.lowTemp
                } <span class="output__temperature--unit"> &#8457;</span>
              </p>
              <p>&mdash;</p>
              <p class="output__temperature--max">
                ${
                  obj?.highTemp
                } <span class="output__temperature--unit"> &#8457;</span>
              </p>
            </div>
          </div>
          <div class="output__city--container">
            <p class="output__city--name"">${
              obj?.city
            },<span class="output__city--country">${obj?.country}</span></p>
          </div>
          <div class="output__feeling--container">
            <p class="output__feeling--day">
              Today is
              <span class="output__feeling--date focus">
                ${formatDate(obj?.date)}</span
              >
              and I feel
              <span class="output__feeling--feelings focus">${obj?.feelings?.toLowerCase()}</span>, It's
              <span class="output__feeling--weather focus">${obj?.weather?.toLowerCase()}</span> out
              there, and I'm deeply sure it's gonna be a good day.
            </p>
          </div>
        </section>


`;

  main.insertAdjacentHTML('beforeend', html);
}

/*

{
    "cityName": "New York",
    "country": "US",
    "weather": "Clouds",
    "weatherDesc": "scattered clouds",
    "weatherIcon": "03n",
    "temp": 51.78,
    "highTemp": 55.11,
    "lowTemp": 47.44,
    "date": 1730783955
}
  */

