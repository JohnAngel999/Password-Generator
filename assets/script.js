// Assignment code here
function generatePassword() {

  //User's length of password
  var length = window.prompt('Please enter desired password length (between 8 and 128 characters):');

  //password length 
  while (length < 8 || length > 128 ) {
    alert('The password length is invalid. Please try again.');
    length =window.prompt('Please enter the length of the password(Must be between 8 and 128 characters):');
  }


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