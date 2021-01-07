// Assignment Code
var generateBtn = document.querySelector("#generate");
var randomCharacters = [];

// Write password to the #password input
function writePassword() {
  var prompt = window.prompt("Please select between 8 and 128 characters");
  if (prompt < 8) {
    alert("Please choose a number greater than or equal to 8");
    var prompt = window.prompt("Please select between 8 and 128 characters");
    if (prompt < 8) {
      prompt = 8
    }
  }
  if (prompt > 128) {
    alert("Please choose a number less than or equal to 128");
    var prompt = window.prompt("Please select between 8 and 128 characters");
    if (prompt > 128) {
      prompt = 8
    }
  }
  var lowercase = confirm("Would you like to use lowercase characters?");
  if (lowercase === true) {
    var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    randomCharacters = lowerCharacters;
  } else {
    randomCharacters = [];
  }

  var uppercase = confirm("Would you like to use uppercase characters?");
  if (uppercase === true) {
    var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var characterArr = randomCharacters.concat(upperCharacters);
    randomCharacters = characterArr;
  }

  var numbers = confirm("Would you like to use numerical characters?");
  if (numbers === true) {
    var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var characterArr = randomCharacters.concat(numerical);
    randomCharacters = characterArr;
  }
  var special = confirm("Would you like to use special characters?");
  if (special === true) {
    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
    var characterArr = randomCharacters.concat(specialCharacters);
    randomCharacters = characterArr;
  }
  if (randomCharacters.length === 0) {
    alert("password characters will be chosen for you")
    randomCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "?"]
  }

  var randomPosition = "";
  var passwordString = "";

  for (let i = 0; i < prompt; i++) {
    var randomNumber = Math.floor(Math.random() * randomCharacters.length);
    var randomPosition = randomCharacters[randomNumber];
    var combinedString = passwordString + randomPosition;
    passwordString = combinedString;
  }
  var passwordText = document.querySelector("#password");
  passwordText.value = passwordString;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
