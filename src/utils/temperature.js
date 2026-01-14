/**
 * Converts Celsius to Fahrenheit
 * @param {number} celsius - Temperature in Celsius
 * @returns {number} Temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

module.exports = {
    celsiusToFahrenheit
};