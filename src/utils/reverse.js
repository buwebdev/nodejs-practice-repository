/**
 * Author: Noah Hamblen
 * Date: October 2025
 * File: reverse.js
 * Description: This script reverses a string in the cmd prompt
 */

// Function to reverse a string
function reverseString(s) {
  // Validate input to ensure it's a string
  if (typeof s !== "string") {
    throw new Error("Input must be a string");
  }

  // Split the string into characters, reverse the array, and join it back into a string
  return s.split("").reverse().join("");
}

// Only run this section when the file is executed directly from Node command line
if (require.main === module) {
  // Retrieve the third command-line argument (index 2)
  const s = process.argv[2];

  // If no input is provided, display a message to the user
  if (!s) {
    console.log("Please provide a string input.");
  }
  // Otherwise, print the reversed string
  else {
    console.log("Reversed:", reverseString(s));
  }
}

// Export the function for imports/testing
module.exports = reverseString;
