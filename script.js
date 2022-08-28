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

var generatePassword = function () {

  var length = passwordLength();

  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialChars = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

  // initialize array to store the strings from which the password characters will be selected
  var passwordSources = [];

  charTypeSelection.charTypePrompts();

  // if user opted to include a character type, add the string of corresponding characters to the passwordSources array
  if (charTypeSelection.lower == "Y") {
    passwordSources.push(lowerChars);
  }
  if (charTypeSelection.upper == "Y") {
    passwordSources.push(upperChars);
  }
  if (charTypeSelection.numeric == "Y") {
    passwordSources.push(numbers);
  }
  if (charTypeSelection.special == "Y") {
    passwordSources.push(specialChars);
  }

  console.log(passwordSources.length);

  // initialize empty string which will store the completed password
  var password = "";

  for (i = 0; i < length; i++) {
    // find index of the source to be used for character selection
    var sourceIndex = Math.floor(Math.random() * passwordSources.length);
    console.log("SOURCE INDEX IS " + sourceIndex);

    // identify the source of the character selection
    var source = passwordSources[sourceIndex];
    console.log("SOURCE IS " + source);

    // find index of the character within the identified source
    var charPosition = Math.floor(Math.random() * source.length);
    console.log("CHARACTER POSITION IS " + charPosition);

    // locate the character within the source and append it to the password
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