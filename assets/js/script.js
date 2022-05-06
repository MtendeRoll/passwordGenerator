// Assignment code here

//psuedocode
// make generate password button clickable
var generatePassword = function () {
  promptSpecial();
};

//create a series of prompts for password criteria

// prompt for length of password between 8-128
var promptLength = function () {
  var passwordLength = window.prompt("How long would you like your password to be? Choose betwen 8 and 128 Characters");

  // ensuring a valid input
  if (passwordLength === null || passwordLength === "" || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    passwordLength = window.prompt("You need to provide a valid numerical answer between 8 and 128! Please try again.");
  }

  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
};

// random universal character
randomIndex = function (array) {
  return Math.floor(Math.random() * array.length);
};

// prompt for special characters
var haveCharacters = [" ", "!", "#", "$", "%", "&", "'", '"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var promptSpecial = function () {
  var confirmSpecial = window.confirm("Would you like your password to have a special character? e.g (.!?/");

  // ensure valid input
  if (confirmSpecial === true) {
    // pick a special character
    randomIndex(haveCharacters);
  }
};
// prompt for lower case
var haveLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var promptLowerCase = function () {
  var confirmLowerCase = window.confirm("Would you like your password to have a lower case?");

  // ensure valid input
  if (confirmLowerCase === true) {
    // pick a special character
    randomIndex(haveLowerCase);
  }
};
// prompt for upper case
var haveUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var promptUpperCase = function () {
  var confirmUpperCase = window.confirm("Would you like your password to have a upper case?");

  // ensure valid input
  if (confirmUpperCase === true) {
    // pick a special character
    randomIndex(haveUpperCase);
  }
};
//prompt for numbers
var haveNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var promptNumbers = function () {
  var confirmNumbers = window.confirm("Would you like your password to have a number?");

  // ensure valid input
  if (confirmNumbers === true) {
    // pick a special character
    randomIndex(haveNumbers);
  }
};

// validate input
// password must have at least one of these characters
// generate password meeting the criteria
// password must be displayed as an alert or in the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
