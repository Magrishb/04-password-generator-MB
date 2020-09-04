// Assignment Code
var generateBtn = document.querySelector("#generate");
//Steps:
/**
 * 1. Prompt for password length from 12 to 128 char
 * 2. Validate the input
 * 3. Confirm if lower case needs to be included
 * 4. Confirm if upper case needs to be included
 * 5. Confirm if number needs to be included
 * 6. Confirm if special character needs to be included
 * 7. Validate at least one criteria is selected
 * 8. Generate password for choosen criteria and length.
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
  
 
//Define initial value for random password and chooseCharArray varible.
 var randomPassword = "";
 var choosenCharArray = [];

 //Add one character for selected type to ensure choose criteria is met.
  if(isLowerCase){
    randomPassword = randomPassword.concat(lowerCaseArr[Math.floor(Math.random() * lowerCaseArr.length)]);
    choosenCharArray = choosenCharArray.concat(lowerCaseArr);
  }
  if(isUpperCase){
    randomPassword = randomPassword.concat(upperCaseArr[Math.floor(Math.random() * upperCaseArr.length)]);
    choosenCharArray = choosenCharArray.concat(upperCaseArr);
  }
  if(isNumber){
    randomPassword = randomPassword.concat(numberArr[Math.floor(Math.random() * numberArr.length)]);
    choosenCharArray = choosenCharArray.concat(numberArr);
  }
  if(isSpecialChar){
    randomPassword = randomPassword.concat(specialCharArr[Math.floor(Math.random() * specialCharArr.length)]);
    choosenCharArray = choosenCharArray.concat(specialCharArr);
  }

  //Based on choosen criteria generate password for remaining length
  for (var i=randomPassword.length; i<passwordLengthPrompt; i++){
    randomPassword = randomPassword.concat(
      choosenCharArray[Math.floor(Math.random() * choosenCharArray.length)]);
    
  }
  return  randomPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
