// Assignment code here
var haveCharacters = [" ", "!", "#", "$", "%", "&", "'", '"', "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var haveLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var haveUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var haveNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// empty array to store password options
var storedOptions = [];

// prompt for length of password between 8-128
function promptLength() {
  var passwordLength = window.prompt("How long would you like your password to be? Choose betwen 8 and 128 Characters");

  // ensuring a valid input
  if (isNaN(passwordLength) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    passwordLength = window.prompt("You need to provide a valid numerical answer between 8 and 128! Please try again.");
  }

  passwordLength = parseInt(passwordLength);
  console.log(passwordLength);
  promptSpecial();
}

// prompt for special characters
function promptSpecial() {
  var confirmSpecial = window.confirm("Would you like your password to have a special character? e.g (.!?/");

  // ensure valid input
  if (confirmSpecial) {
    // push into empty array
    storedOptions = storedOptions.concat(haveCharacters);
    console.log(storedOptions);
  }

  promptLowerCase();
}
// prompt for lower case
function promptLowerCase() {
  var confirmLowerCase = window.confirm("Would you like your password to have a lower case?");

  // ensure valid input
  if (confirmLowerCase) {
    // push into empty array
    storedOptions = storedOptions.concat(haveLowerCase);
  }

  promptUpperCase();
}
// prompt for upper case
function promptUpperCase() {
  var confirmUpperCase = window.confirm("Would you like your password to have a upper case?");

  // ensure valid input
  if (confirmUpperCase === true) {
    // pick a special character
    storedOptions = storedOptions.concat(haveUpperCase);
  }

  promptNumbers();
}
//prompt for numbers
function promptNumbers() {
  var confirmNumbers = window.confirm("Would you like your password to have a number?");

  // ensure valid input
  if (confirmNumbers) {
    // push into empty array
    storedOptions = storedOptions.concat(haveNumbers);
  }
}

// make generate password button clickable
var generatePassword = function () {
  promptLength();
  console.log(storedOptions);

  var newPassword = [];

  // for (var i = 0; i < promptLength; i++) {
  //   var randomIndex = function (array) {
  //     return Math.floor(Math.random() * promptLength);
  //   };
  // }
};

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
