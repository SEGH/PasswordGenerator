// Assignment Code
var generateBtn = document.querySelector("#generate");

//Assign variables to arrays with lower and uppercase letters, numbers, and special characters.
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
console.log(lowerCase.length);
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
console.log(upperCase.length);
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(numbers.length);
var specialChar = ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
console.log(specialChar.length);

// Functions to get criteria via prompts (length, lowercase, uppercase, numbers, special characters).

function getLength() {
  // Set variable to prompt response
  var length = prompt("Choose password length by entering number between 8 and 128");
  // Validate user input
  if ((length >= 8) && (length <= 128)) {
    // Return variable if validated
    return length;
  }
  // Else return alert
  return alert("Length not valid, please try again");
}
console.log(getLength());

// Function to confirm characters, validate responses, and create super array
function getCharTypes() {
  // Declare super array
  var superArray = [];

  // Three confirms set to variables
  var lower = confirm("Click Okay to use lowercase characters in password, or Cancel to exclude them");
  var upper = confirm("Click Okay to use uppercase characters in password, or Cancel to exclude them");
  var number = confirm("Click Okay to use numbers in password, or Cancel to exclude them");
  var special = confirm("Click Okay to use special characters in password, or Cancel to exclue them");

  // Validate that at least one confirm is true
  if ((!lower) && (!upper) && (!number) && (!special)) {
    alert("Must select at least one character type, please try again");
  }

  // Concat selected arrays to superArray
  if (lower) {
    superArray = superArray.concat(lowerCase);
  }
  if (upper) {
    superArray = superArray.concat(upperCase);
  }
  if (number) {
    superArray = superArray.concat(numbers);
  }
  if (special) {
    superArray = superArray.concat(specialChar);
  }

  console.log(superArray.length);
  return superArray;
}
console.log(getCharTypes());

// Function to randomly generate password based on criteria entered
function generatePassword() {
  // Define variables set to criteria prompt functions
  var length = getLength();

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