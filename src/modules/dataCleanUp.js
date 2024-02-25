// Data cleanup
function tempToF (temp) {
  const tempF = Math.round((temp - 273.15) * 1.8 + 32)
  return tempF
}

function tempToC (temp) {
  const tempC = Math.round(temp - 273.15)
  return tempC
}

function cleanTemperature (temp, unit) {
  if (unit === 'F') {
    return tempToF(temp)
  } else {
    return tempToC(temp)
  }
}

function cleanTime (unix) {
  const date = new Date(unix * 1000)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const formattedTime = `${hours}:${minutes}`

  return formattedTime
}

function cleanWindSpeed (wind, unit) {
  // in m/s by default
  let speed
  if (unit === 'F') {
    speed = wind * 2.23694
  } else {
    speed = wind
  }
  const rounded = Math.round(speed * 10) / 10
  return rounded
}

function cleanUp (info, unit) {
  // Insert object containing extracted API info
  const cleanData = {}
  cleanData.condition = info.condition
  cleanData.description = info.description
  cleanData.icon = info.icon
  cleanData.temp = cleanTemperature(info.temp, unit)
  cleanData.feelsLikeTemp = cleanTemperature(info.feelsLikeTemp, unit)
  cleanData.tempMax = cleanTemperature(info.tempMax, unit)
  cleanData.tempMin = cleanTemperature(info.tempMin, unit)
  cleanData.humidity = info.humidity
  cleanData.windSpeed = cleanWindSpeed(info.windSpeed, unit)
  cleanData.sunrise = cleanTime(info.sunrise)
  cleanData.sunset = cleanTime(info.sunset)
  cleanData.city = info.city
  cleanData.time = cleanTime(info.time)

  console.log(cleanData)
  return cleanData
}

export { cleanUp }
