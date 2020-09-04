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
  if( typeof parseInt(passwordLengthPrompt, 10) !== 'number' || isNaN(passwordLengthPrompt) || passwordLengthPrompt < 12 || passwordLengthPrompt > 128 ){
    alert("Please enter valid password length");
    return "";
  }
 var isLowerCase = confirm("Do you want to include lower case letters?");
 console.log(isLowerCase);
  var isUpperCase = confirm("Do you want to include upper case letters?");
  console.log(isUpperCase);
  var isNumber = confirm("Do you want to include numbers?");
  console.log(isUpperCase);
  var isSpecialChar = confirm("Do you want to include special characters?");
  console.log(isUpperCase);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
