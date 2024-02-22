import "./style.scss"
import { domInit, nameDate, mainWeather, weatherGrid } from '../src/modules/DOM.js';
import { cleanUp } from "../src/modules/dataCleanUp.js";
import { callAPI, extractAPI } from "../src/modules/api.js";

const unit = 'F';

// Event listener for city input
const form = document.querySelector('.search');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let city = form.elements['city'].value;
    const apiResponse = await callAPI(city);
    const weatherInfo = await extractAPI(apiResponse);
    let data = cleanUp(weatherInfo, unit);

    // DOM update
    domInit();
    nameDate(data.city, data.time);
    mainWeather(data.icon, data.temp, data.condition, data.feelsLikeTemp, data.description);
    weatherGrid(data.tempMax, data.tempMin, data.humidity, data.windSpeed, data.sunrise, data.sunset);

});

/*
BUGS TO FIX:
- time display issue
- add degree symbols to grid
- add wind speed to grid
- capitalize description
- make buttons functional
*/