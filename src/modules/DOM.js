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

export { domInit, nameDate, mainWeather, weatherGrid };