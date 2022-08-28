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

// function to generate a password based on user selected criteria for length and character type
var generatePassword = function () {
  // determine the password length and set to a variable
  var length = passwordLength();

  // initialize strings that will be used to source the characters for the password
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialChars = "~`!@#$%^&*()_-+={[}]|:;<,>.?/";

  // initialize array to store the strings from which the password characters will be selected
  var passwordSources = [];

  // call function to ask user which character types they wans to have included in the password
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

  // initialize empty string which will store the completed password
  var password = "";

  // randomly add characters to the password until the length matches what the user selected
  for (i = 0; i < length; i++) {
    // find index of the source to be used for character selection
    var sourceIndex = Math.floor(Math.random() * passwordSources.length);

    // identify the source of the character selection
    var source = passwordSources[sourceIndex];

    // find index of the character within the identified source
    var charPosition = Math.floor(Math.random() * source.length);

    // locate the character within the source and append it to the password string
    password += source[charPosition];
  }
  return password;
}


// function to determine the password length
var passwordLength = function () {
  // prompt the user for the password length
  var promptLength = window.prompt("Please enter a password length from 8 to 128 characters.")

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

// object to collect user selections for character type when prompted
var charTypeSelection = {
  lower: "",
  upper: "",
  numeric: "",
  special: "",
  charTypePrompts: function () {
    // prompt for yes or no the each chacarter type then store the answer as the new object value
    this.lower = window.prompt("Include lowercase characters? Enter Y for YES and N for NO");
    this.upper = window.prompt("Include uppercase characters? Enter Y for YES and N for NO");
    this.numeric = window.prompt("Include numeric characters? Enter Y for YES and N for NO");
    this.special = window.prompt("Include special characters? Enter Y for YES and N for NO");

    // convert values to upper case
    this.lower = this.lower.toUpperCase();
    this.upper = this.upper.toUpperCase();
    this.numeric = this.numeric.toUpperCase();
    this.special = this.special.toUpperCase();

    // check if user selected yes to include any of the character types 
    if (!(Object.values(this).indexOf('Y') > -1)) {
      window.alert("You did not include any of the characters types. You must select least one type to generate a password.")
      // run the function again to allow user to select character types again
      return this.charTypePrompts();
    }
  }
}