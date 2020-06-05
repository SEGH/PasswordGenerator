// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assign variables to arrays with lower and uppercase letters, numbers, and special characters.


// Functions to get criteria via prompts (length, lowercase, uppercase, numbers, special characters).

function getLength() {
  // Set variable to prompt response

  // Validate user input

    // Return variable if validated
  return 20;
  // Else return alert

}

function askLower() {
  // Set variable to prompt response

  // Validate user input

    // Return variable if validated

  // Else return alert

}

function askUpper() {
  // Set variable to prompt response

  // Validate user input

    // Return variable if validated

  // Else return alert

}

function askNum() {
  // Set variable to prompt response

  // Validate user input

    // Return variable if validated

  // Else return alert

}

function askChar() {
  // Set variable to prompt response

  // Validate user input

    // Return variable if validated

  // Else return alert

}

// Function to randomly generate password based on criteria entered
function generatePassword() {
  // Define variables set to criteria prompt functions
  var length = getLength();

  // If/else statements using prompt responses and three previously defined arrays to create super array

  // Run for loop for number of times the length of password

    // Math.random select characters from super array
    var result = Math.random();

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
