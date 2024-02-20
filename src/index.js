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
    day.textContent = date; // Clean up before inserting

    container.appendChild(h2);
    container.appendChild(day);
    main.appendChild(container);
    console.log("name and date created");
    return null
}

function mainWeather(logo, temp, condition, feelsLike, description) {
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.className = "main-weather";
    main.appendChild(container);

    const logoTemp = document.createElement("div");
    logoTemp.className = "logo-temp";
    container.appendChild(logoTemp);

    const pic = document.createElement("img");
    pic.src = `https://openweathermap.org/img/wn/${logo}@2x.png`;
    pic.alt = `Logo for ${description}`;
    logoTemp.appendChild(pic);

    const temperature = document.createElement("p");
    temperature.className = "temp";
    temperature.textContent = `${temp}`; //Clean up prior to inserting
    logoTemp.appendChild(temperature);

    const details = document.createElement("div");
    details.className = "details";
    container.appendChild(details);

    const p1 = document.createElement("p");
    p1.className = "main";
    p1.textContent = condition;
    details.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = `Feels like ${feelsLike}`; // Again, clean up before insering
    details.appendChild(p2);

    const p3 = document.createElement("p");
    p3.textContent = description;
    details.appendChild(p3);

    console.log('main weather created')
    return null
}

function weatherGrid(highTemp, lowTemp, humidity, wind, sunrise, sunset){
    // be sure to clean all of the input up before inserting it
    const main = document.querySelector("main");
    const container = document.createElement("div");
    container.className = "weather-grid";
    main.appendChild(container);

    function createBlock(type, value){
        // To avoid duplicate code
        const block = document.createElement('div');
        block.className = "block";
        const p = document.createElement('p');
        p.textContent = type;
        const div = document.createElement('div');
        div.textContent = value;
        block.appendChild(p)
        block.appendChild(div)

        return block;
    }

    const hTemp = createBlock("High Temp", highTemp);
    const lTemp = createBlock("Low Temp", lowTemp);
    const hum = createBlock("Humidity", humidity);
    const win = createBlock("Wind Speed", wind);
    const rise = createBlock("Sunrise", sunrise);
    const set = createBlock("Sunset", sunset);

    container.appendChild(hTemp);
    container.appendChild(lTemp);
    container.appendChild(hum);
    container.appendChild(win);
    container.appendChild(rise);
    container.appendChild(set);

    console.log('weather grid created')
    return null
}

// Explicit order
domInit();
nameDate('Cleveland', 'date');
mainWeather('01d', '38°F', 'Cloudy', '29°F', 'Slight breeze');
weatherGrid('41°F', '12°F', '90%', '12mph', '0630', '1802');