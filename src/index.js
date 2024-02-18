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
    weatherInformation.windSpeed = apiCall.wind.speed;
    weatherInformation.sunrise = apiCall.sys.sunrise;
    weatherInformation.sunset = apiCall.sys.sunset;
    weatherInformation.city = apiCall.name;

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

// Data cleanup functions
function tempToF(temp) {
    let tempF = Math.round((temp - 273.15) * 1.8 + 32);
    return tempF;
}

function tempToC(temp) {
    let tempC = Math.round(temp - 273.15);
    return tempC
}

// DOM Functions
function domInit() {
    const body = document.querySelector("body");
    const main = document.createElement("main");
    body.appendChild(main);
    console.log("main created");
    return null
}

function nameDate(name, date) {
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.className = "name-date";

    const h2 = document.createElement("h2");
    h2.className = "city-name";
    h2.textContent = name;

    const day = document.createElement("p");
    day.className = "date";
    day.textContent = date;

    container.appendChild(h2);
    container.appendChild(day);
    main.appendChild(container);
    console.log("name and date created");
    return null
}

domInit();
nameDate('Cleveland', 'date');