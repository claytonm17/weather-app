import "./style.scss"
import { domInit, nameDate, mainWeather, weatherGrid } from '../src/modules/DOM.js';
import { cleanUp } from "../src/modules/dataCleanUp.js";
import { callAPI, extractAPI } from "../src/modules/api.js";

let unit = 'F'; // default

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
    mainWeather(data.icon, data.temp, data.condition, data.feelsLikeTemp, data.description, unit);
    weatherGrid(data.tempMax, data.tempMin, data.humidity, data.windSpeed, data.sunrise, data.sunset, unit);
});

const toggleCelcius = document.querySelector('.celcius');
const toggleFahrenheit = document.querySelector('.fahrenheit');

toggleCelcius.addEventListener('click', () => {
    unit = 'C';
    toggleCelcius.classList.add("active");
    toggleFahrenheit.classList.remove("active");
    console.log("Unit changed to C");
});

toggleFahrenheit.addEventListener('click', () => {
    unit = 'F';
    toggleFahrenheit.classList.add("active");
    toggleCelcius.classList.remove("active");
    console.log("Unit changed to F");
});

export { unit }

/*
BUGS TO FIX:
- time display issue
- make buttons functional for degree and speed
- loading screen
*/