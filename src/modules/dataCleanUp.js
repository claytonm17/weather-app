// Data cleanup functions


function tempToF(temp) {
    let tempF = Math.round((temp - 273.15) * 1.8 + 32);
    return tempF;
}

function tempToC(temp) {
    let tempC = Math.round(temp - 273.15);
    return tempC
}

export { tempToF, tempToC };