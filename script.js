// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordLength(), charTypeSelection.charTypePrompts());
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function (length, charType) {

  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialChars = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

  var passwordSources = [];

  if (charTypeSelection.lower == "Y") {
    passwordSources.push(lowerChars);
  }
  if (charTypeSelection.upper == "Y") {
    // passwordSource += upperChars;
    passwordSources.push(upperChars);
  }
  if (charTypeSelection.numeric == "Y") {
    // passwordSource += numbers;
    passwordSources.push(numbers);
  }
  if (charTypeSelection.special == "Y") {
    // passwordSource += specialChars;
    passwordSources.push(specialChars);
  }

  console.log(passwordSources.length);

  var password = "";

  for (i = 0; i < length; i++) {
    var sourceIndex = Math.floor(Math.random() * passwordSources.length);
    console.log("SOURCE INDEX IS " + sourceIndex);

    var source = passwordSources[sourceIndex];
    console.log("SOURCE IS " + source);

    var charPosition = Math.floor(Math.random() * source.length);
    console.log("CHARACTER POSITION IS " + charPosition);

    password += source[charPosition];
    console.log("PASSWORD IS " + password);
  }
}


// function to determine the password length
var passwordLength = function () {
  // prompt the user for the password length
  var promptLength = window.prompt("Please enter a password length from 8 to 128 characters.")
  console.log("Password length = " + promptLength)

  // validate whether the entered value is a number from 8 to 128
  if (!(promptLength >= 8) || !(promptLength <= 128)) {
    window.alert("Invalid entry! Enter a new value.");
    // have the user try again by re-running the function
    return passwordLength();
  }
  else {
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
    // console.log("Incude lower? " + this.lower);

    this.upper = window.prompt("Include uppercase characters? Enter Y for YES and N for NO");
    // console.log("Incude upper? " + this.upper);

    this.numeric = window.prompt("Include numeric characters? Enter Y for YES and N for NO");
    // console.log("Incude numeric? " + this.numeric);

    this.special = window.prompt("Include special characters? Enter Y for YES and N for NO");
    // console.log("Incude special? " + this.special);

    // convert values to upper case
    this.lower = this.lower.toUpperCase();
    this.upper = this.upper.toUpperCase();
    this.numeric = this.numeric.toUpperCase();
    this.special = this.special.toUpperCase();

    // check if user selected yes to include any of the character types 
    if (!(Object.values(this).indexOf('Y') > -1)) {
      window.alert("You did not include any of the characters types. You must select least one type to generate a password.")
      return this.charTypePrompts();
    }
  }
}



// console.log("Password length = " + passwordLength());
// charTypeSelection.charTypePrompts();
// console.log(charTypeSelection);
// console.log(charTypeSelection.lower);
// console.log(charTypeSelection.upper);
// console.log(charTypeSelection.numeric);
// console.log(charTypeSelection.special);

// console.log(generatePassword());


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