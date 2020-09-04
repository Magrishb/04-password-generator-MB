// Assignment Code
var generateBtn = document.querySelector("#generate");
//Steps:
/**
 * 1. Ask for password length from 12 to 128 char
 * 2. Validate the input
 * */
var passwordLength = alert();
var isLowerCase = alert();
var isUpperCase = alert();
var isNumber = alert();
var isSpecialChar = alert();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 function generatePassword(){

 }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
