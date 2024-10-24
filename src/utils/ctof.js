/**
 * Developer: Meher Salim
 * Date: 10.22.2024
 * File: ctof.js
 * Description: This script converts celsius to fahrenheit.
*/

// The formula is (Celsius * 9/5) + 32 = Fahrenheit
function celsiusToFahrenheit(celsius) {
  // Multiply the Celsius temperature by 9/5 (or 1.8) and then add 32 to complete conversion
  let fahrenheit = celsius * (9 / 5) + 32;

  // Return the calculated Fahrenheit value
  return fahrenheit;
}

// Export the function so it can be imported in test files
module.exports = celsiusToFahrenheit;