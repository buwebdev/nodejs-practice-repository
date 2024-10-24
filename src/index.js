/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: index.js
 * Description: This script is the main entry point for the factorial function and has
 * been updated to include the Celsius to Fahrenheit Convertor.
 * Update by: Meher Salim
 * Description: This script is the main entry point for the utils
 */

// Import the factorial function from the factorial.js file
const { factorial } = require('./utils/factorial');


// Import the celsiusToFahrenheit function from the ctof.js file
const celsiusToFahrenheit = require('./utils/ctof'); // Import the function correctly


// The main() function calculates the factorial of 5 and logs the result to the console
// and converts a Celsius value to Fahrenheit.

// Import the reverseString function from the reverseStringjs file
const { reverseString } = require('./utils/reverseString');

// The main() function calculates the factorial of 5 and logs the result to the console
// and reverse  the string "evil" and logs the result to the console.

async function main () {
  // Factorial calculation
  const result = factorial(5); // Call the factorial function with the value of 5
  console.log('factorial of 5 is', result); // Log the result to the console


  // Celsius to Fahrenheit conversion
  const celsius = 25; // Example Celsius temperature
  const fahrenheit = celsiusToFahrenheit(celsius); // Call the celsiusToFahrenheit function
  console.log(`${celsius}°C is ${fahrenheit}°F`); // Log the conversion result

  const reversedStr = reverseString("evil"); // Call the reverseString function with the value of evil
  console.log('the reversed string of "evil" is: ', reversedStr); // Log the result to the console

}

main(); // Call the main function to calculate the factorial of 5 and reverse the string "evil"