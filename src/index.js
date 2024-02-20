import "./style.scss"
import { domInit, nameDate, mainWeather, weatherGrid } from '../src/modules/DOM.js';
import { tempToF, tempToC } from "../src/modules/dataCleanUp.js";
import { callAPI, extractAPI } from "../src/modules/api.js";

// Event listener for city input
const form = document.querySelector('.search');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let city = form.elements['city'].value;
    const apiResponse = await callAPI(city);
    const weatherInfo = await extractAPI(apiResponse);
    console.log(weatherInfo);
});

// Explicit order for DOM
domInit();
nameDate('Cleveland', 'date');
mainWeather('01d', '38°F', 'Cloudy', '29°F', 'Slight breeze');
weatherGrid('41°F', '12°F', '90%', '12mph', '0630', '1802');

/*
function displayWeatherData(name, date, logo, temp, 
                            condition, feelsLike, description, 
                            highTemp, lowTemp, humidity, wind, 
                            sunrise, sunset){
    domInit();
    nameDate(name, date);
    mainWeather(logo, temp, condition, feelsLike, description);
    weatherGrid(highTemp, lowTemp, humidity, wind, sunrise, sunset);
    return null;
} */