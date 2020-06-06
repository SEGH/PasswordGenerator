// Assignment Code
var generateBtn = document.querySelector("#generate");
var superArray = [];
var characters = [
  { 
    name: "lowercase letters", 
    isSelected: true, 
    array: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
  },
  { 
    name: "uppercase letters", 
    isSelected: true,  
    array: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
  },
  { 
    name: "numbers", 
    isSelected: true,  
    array: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
  },
  { 
    name: "special characters", 
    isSelected: true, 
    array: ["@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."] 
  }
];

// Function to prompt user to select password length
function getLength() {
  // Set variable to prompt response
  var length = prompt("Choose your password length: \n\nEnter a number between 8 and 128");
  // If user selects Cancel...
  if (length === null) {
    return;
  } else if ((length >= 8) && (length <= 128)) {
    // Return variable if validated
    return length;
  }
  // Else return alert
  return alert("Please try again! \n\nLength must be a number >= 8 and <= 128");
}

// Function to confirm character type and push to superArray if true
function getCharacters(type) {
  type.isSelected = confirm("Click OK to use " + type.name + " in password \n\nClick Cancel to exclude them");
  if (type.isSelected) {
    superArray = superArray.concat(type.array);
  }
}

// Function to randomly generate password based on criteria entered
function generatePassword() {
  // Assign variable to result string
  var result = "";

  // Run length prompt and set to variable...
  var length = getLength();
  // While length is valid, run getCharacters for each type in character array
  while (length !== undefined) {
    for (var i = 0; i < characters.length; i++) {
      getCharacters(characters[i]);
    }
    // If superArray isn't empty...
    if (superArray.length > 0) {
      // Run for loop for number of times the length of password...
      for (var i = 0; i < length; i++) {
        // Math.random select characters from super array
        var randomSelect = superArray[Math.floor((Math.random() * superArray.length))];
        result = result + randomSelect;
      }
      superArray = [];
      return result;
    }
    alert("Please select at least one character type");
  }
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