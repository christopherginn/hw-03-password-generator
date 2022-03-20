// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
    function generatePassword () {

      // Prompts user for input. First, the password length. 
      // If a valid length is entered, then the user receives a series of prompts to establish criteria.

      var passwordLength = Number(prompt("How many characters would you like your password to have?" + "Passwords must be 8-128 characters."));
      if (passwordLength >= 8 && passwordLength <= 128) {
        var upperCaseLetters = Boolean(confirm("Upper case letters?"));
        var lowerCaseLetters = Boolean(confirm("Lower case letters?"));
        var numbers = Boolean(confirm("Numbers?"));
        var specialCharacters = Boolean(confirm("Special characters?"));

        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var numberPool = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        var specialCharactersPool = ["!", "@", "#", "$", "%", "&", "*", "_"];

        // Builds the criteria for the password based on user's answers to the prompts.
        // stores functions for random characters in their own array. availableFunctions 

        var availableFunctions = [];

        if (upperCaseLetters) {
          availableFunctions.push(generateUpperCase);
        }

        if (lowerCaseLetters) {
          availableFunctions.push(generateLowerCase);
        }

        if (numbers) {
          availableFunctions.push(generateNumbers);
        }

        if (specialCharacters) {
          availableFunctions.push(generateSpecial);
        }
  
        // functions to generate random characters based on their respective arrays

        function generateUpperCase() {
          var upperCaseLettersIndex = Math.floor(Math.random() * letters.length);
          var upperCaseChoice = letters[upperCaseLettersIndex].toUpperCase();
          // console.log(upperCaseChoice);
          return upperCaseChoice;
        };
  
        function generateLowerCase() {
          var lowerCaseIndex = Math.floor(Math.random() * letters.length);
          var lowerCaseChoice = letters[lowerCaseIndex].toLowerCase();
          // console.log(lowerCaseChoice);
          return lowerCaseChoice;
        };
  
        function generateNumbers() {
          var numbersIndex = Math.floor(Math.random() * numberPool.length);
          var numbersChoice = numberPool[numbersIndex];
          // console.log(numbersChoice);
          return numbersChoice;
        };
  
        function generateSpecial() {
          var specialIndex = Math.floor(Math.random() * specialCharactersPool.length);
          var specialChoice = specialCharactersPool[specialIndex];
          return specialChoice;
        };

        // function to randomize placement of characters in password

        function randomFunction() {
          function availableIndex() {
          var index = Math.floor(Math.random() * availableFunctions.length);
          return index;
          }
          return availableFunctions[availableIndex()](); // () at the end will call the functions stored in availableFunctions array
        }
        
        

        if (availableFunctions.length > 0) {

          var passwordArray = [];

          for (var i = 0; i < passwordLength; i++) {
            passwordArray.push(randomFunction());
          }
          console.log(passwordArray);
          passwordArrayText = passwordArray.join(""); // .join displays array without any commas
          alert("Your password is ready! Click OK to reveal it!");
          return passwordArrayText;
          
        } else {
          alert("No criteria determined. Please try again.");
          var notWorkingString = "Password could not be generated.";
          return notWorkingString;
        }

      } else {
        alert("Sorry, you've entered an invalid option.");
        var notWorkingString = "Password could not be generated.";
        return notWorkingString;
      };
      // Log to console to ensure entries are accurate
      // console.log("Password length:", passwordLength)
      // console.log("Upper Case letters:", upperCaseLetters);
      // console.log("Lower case letters:", lowerCaseLetters);
      // console.log("Numbers:", numbers);
      // console.log("Special Characters", specialCharacters);
      // console.log();
    }
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
