// Data cleanup
function tempToF(temp) {
    let tempF = Math.round((temp - 273.15) * 1.8 + 32);
    return tempF;
}

function tempToC(temp) {
    let tempC = Math.round(temp - 273.15);
    return tempC
}

function cleanTemperature(temp, unit) {
    if (unit === 'F') {
        return tempToF(temp);
    } else {
        return tempToC(temp);
    }
}

function cleanTime(unix) {
    let date = new Date(unix * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let formattedTime = `${hours}:${minutes}`

    return formattedTime;
}

function cleanWindSpeed(wind, unit) {
    // in m/s by default
    if (unit === 'F') {
        return wind * 2.23694
    } else {
        return wind
    }
}

function cleanUp(info, unit) {
    // Insert object containing extracted API info
    let cleanData = {};
    cleanData.condition     = info.condition
    cleanData.description   = info.description
    cleanData.icon          = info.icon
    cleanData.temp          = cleanTemperature(info.temp, unit)
    cleanData.feelsLikeTemp = cleanTemperature(info.feelsLikeTemp, unit)
    cleanData.tempMax       = cleanTemperature(info.tempMax, unit)
    cleanData.tempMin       = cleanTemperature(info.tempMin, unit)
    cleanData.humidity      = info.humidity
    cleanData.windSpeed     = cleanWindSpeed(info.windSpeed)
    cleanData.sunrise       = cleanTime(info.sunrise)
    cleanData.sunset        = cleanTime(info.sunset)
    cleanData.city          = info.city
    cleanData.time          = cleanTime(info.time)

    console.log(cleanData)
    return cleanData
}

export { cleanUp };