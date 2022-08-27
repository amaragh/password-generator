// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function () { }


// function to determine the password length
var passwordLength = function () {
  // prompt the user for the password length
  var promptLength = window.prompt("Please enter a password length from 8 to 128 characters.")

  // validate whether the entered value is a number from 8 to 128
  if (!(promptLength >= 8) || !(promptLength <= 128)) {
    window.alert("Invalid entry! Enter a new value.");
    return passwordLength();
  }
  else {
    // have the user try again by re-running the function
    return promptLength;
  }
}

var charTypeSelection = {
  lower: "",
  upper: "",
  numeric: "",
  special: "",
  charTypePrompts: function () {
    this.lower = window.prompt("Include lowercase characters? Enter Y for YES and N for NO");
    console.log("Incude lower? " + this.lower);

    this.upper = window.prompt("Include uppercase characters? Enter Y for YES and N for NO");
    console.log("Incude upper? " + this.upper);

    this.numeric = window.prompt("Include numeric characters? Enter Y for YES and N for NO"); 
    console.log("Incude numeric? " + this.numeric);

    this.special = window.prompt("Include special characters? Enter Y for YES and N for NO"); 
    console.log("Incude special? " + this.special);
   
    // convert values to upper case
    this.lower = this.lower.toUpperCase();
    this.upper = this.upper.toUpperCase();
    this.numeric = this.numeric.toUpperCase();
    this.special = this.special.toUpperCase();

    // check if user selected yes to include any of the character types 
    if (!(Object.values(this).indexOf('Y') > -1)) {
      console.log("NOT good to go");
      window.alert("You did not include any of the characters types. ")
      return this.charTypePrompts();
    }
  }
}



// var characterTypes = function () {
//   charTypeSelection.lower 
//   console.log(charTypeSelection.lower);

// }

console.log("Password length = " + passwordLength());
// console.log("character types = " + characterTypes());
charTypeSelection.charTypePrompts();
console.log(charTypeSelection);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page