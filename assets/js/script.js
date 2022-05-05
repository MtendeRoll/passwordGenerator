// Assignment code here

//psuedocode 
// make generate password button clickable

var generatePassword = function(){
promptLength();
}
//create a series of prompts for password criteria

// prompt for length of password between 8-128
var promptLength = function(){
  var passwordLength = window.prompt("How long would you like your password to be? Choose betwen 8 and 128 Characters");

// ensuring a valid input
  if (passwordLength === null || passwordLength === "" || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128){
    passwordLength = window.prompt("You need to provide a valid numerical answer between 8 and 128! Please try again.")
  }

 passwordLength = parseInt(passwordLength);
 console.log(passwordLength);

};
// prompt for special characters
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "\"", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",];
// prompt for lower case
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// prompt for upper case
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
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
