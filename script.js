// Assignment Code
var generateBtn = document.querySelector("#generate");
//Steps:
/**
 * 1. Ask for password length from 12 to 128 char
 * 2. Validate the input
 * */
function generatePassword(){
  var passwordLengthPrompt = prompt("Please enter desire password length. Lenght must be between 12 and 128");
  //var passwordLength = parseInt(passwordLengthPrompt);
  if( typeof passwordLengthPrompt !== 'number' || passwordLengthPrompt < 12 || passwordLengthPrompt < 128 ){
    alert("Please enter valid password length");
    return "";
  }
  var isLowerCase = alert();
  var isUpperCase = alert();
  var isNumber = alert();
  var isSpecialChar = alert();
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
