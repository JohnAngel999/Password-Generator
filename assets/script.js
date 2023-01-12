// Assignment code here
function generatePassword() {

  //User's length of password
  var length = window.prompt('Please enter desired password length (between 8 and 128 characters):');

  //password length 
  while (length < 8 || length > 128 ) {
    alert('The password length is invalid. Please try again.');
    length =window.prompt('Please enter the length of the password(Must be between 8 and 128 characters):');
  }

  //user's desired character types
  var lowercase = window.confirm('Include lowercase letters in the password?');
  var uppercase = window.confirm('Include uppercase letters in the password?');
  var symbols = window.confirm('Include symbols in the password?');
  var numbers = window.confirm('Include numbers in the password?');

  //Validate that one character type is selected
  while (!lowercase && !uppercase && !symbols && !numbers) {
    alert('You must select at least one character type for the password. Please try again.');
    lowercase = window.confirm('Include lowercase letters in password?');
    uppercase = window.confirm('Include uppercase letters in the password?');
    symbols = window.confirm('Include symbols in the password?');
    numbers = window.confirm('Include numbers in the password?');

  }

  //Array of characaters to include in the password
  const characaters = [];
 
// Add lowercase letters
if (lowercase) {
  for (var i = 97; i <= 122; i++){
    characaters.push(String.fromCharCode(i));
  }
}

// Add uppercase letters if requested
if (uppercase) {
  for (var i = 65; i <= 90; i++) {
    characaters.push(String.fromCharCode(i));
  }
}

// Add symbols if requested
if (symbols) {
  for (var i = 0; i < symbolcharacters.length; i++) {
    characaters.push(symbolcharacters.charAt(i));
  }
}

// Add numbers if requested 
if (numbers) {
  for (var i = 48; i <= 57; i++ ) {
    characaters.push(String.fromCharCode(i));
  }
}

// Initialize the password as an empty string
var password = '';

// Generate the password by selecting random characters from the array
for (var i = 0; i < length; i++) {
  const index = Math.floor(Math.random() * characaters.length);
  password += characaters[index];
}

// Return the generated password 
return password;



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