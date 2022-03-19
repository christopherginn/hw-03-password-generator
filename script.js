// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
    function generatePassword () {


      var passwordLength = Number(prompt("How many characters would you like your password to have?" + "Passwords must be 8-128 characters."));
      if (passwordLength >= 8 && passwordLength <= 128) {
        var upperCaseLetters = Boolean(confirm("Upper case letters?"));
        var lowerCaseLetters = Boolean(confirm("Lower case letters?"));
        var numbers = Boolean(confirm("Numbers?"));
        var specialCharacters = Boolean(confirm("Special characters?"));
        var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var numberPool = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        var specialCharactersPool = ["!", "@", "#", "$", "%", "&", "*", "_"];
  
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

        if (!upperCaseLetters && !lowerCaseLetters && !numbers && !specialCharacters) {
          alert("No criteria established.")
        } else if (upperCaseLetters == true && lowerCaseLetters == true && numbers == true && specialCharacters == true) {
          function randomFunction() {
            var availableFunctions = [generateUpperCase(), generateLowerCase(), generateNumbers(), generateSpecial()];
              function availableIndex() {
                var index = Math.floor(Math.random() * availableFunctions.length);
                return index;
              }
            return availableFunctions[availableIndex()];
          };

          var passwordArray = [];

          for (var i = 0; i < passwordLength; i++) {
            passwordArray.push(randomFunction());
          }
          console.log(passwordArray);
          passwordArrayText = passwordArray.join("");
          alert("Your password is ready! Click OK to reveal it!");
          return passwordArrayText;

        } else {
          alert("This isn't working");
        }

      } else {
        alert("Sorry, you've entered an invalid option.");
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
