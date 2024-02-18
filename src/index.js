import "./style.scss"

const apiKey = "ce6f2972b60d0187995517d95c413871"; // dont steal pls

async function callAPI(city) {
    // Returns api json
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const call = await fetch(url);
    return call.json();
};

async function extractAPI(apiCall) {
    // extracting weather info used for app in an object
    let weatherInformation = {};
    weatherInformation.condition = apiCall.weather[0].main;
    weatherInformation.description = apiCall.weather[0].description;
    weatherInformation.icon = apiCall.weather[0].icon
    weatherInformation.temp = apiCall.main.temp;
    weatherInformation.feelsLikeTemp = apiCall.main.feels_like;
    weatherInformation.tempMax = apiCall.main.temp_max;
    weatherInformation.tempMin = apiCall.main.temp_min;
    weatherInformation.humidity = apiCall.main.humidity;
    weatherInformation.visibility = apiCall.visibility;
    weatherInformation.windSpeed = apiCall.wind.speed;

    return weatherInformation
};

// Event listener for city input
const form = document.querySelector('.search');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let city = form.elements['city'].value;
    const apiResponse = await callAPI(city);
    const weatherInfo = await extractAPI(apiResponse);
    console.log(weatherInfo);
});