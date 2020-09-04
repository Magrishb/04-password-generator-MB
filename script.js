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
  console.log(isNumber);
  var isSpecialChar = confirm("Do you want to include special characters?");
  console.log(isSpecialChar);
  if(!isLowerCase && !isUpperCase && !isNumber && !isSpecialChar) {
      alert("Please select at least one valid password type");
      return "";
  }

  var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCaseArr =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numberArr = ["0","1","2","3","4","5","6","7","8","9"];
  var specialCharArr = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|",":",";","<",">","?"];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
