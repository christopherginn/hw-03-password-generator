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
        var specialCharactersPool = [];
  
        function generateUpperCase() {
          var upperCaseLettersIndex = Math.floor(Math.random() * letters.length);
          var upperCaseChoice = letters[upperCaseLettersIndex].toUpperCase();
          return upperCaseChoice;
          console.log(upperCaseChoice);
        };
  
        function generateLowerCase() {
          var lowerCaseIndex = Math.floor(Math.random() * letters.length);
          var lowerCaseChoice = letters[lowerCaseIndex].toLowerCase();
          return lowerCaseChoice;
          console.log(lowerCaseChoice);
        };
  
        function generateNumbers() {
          var numbersIndex = Math.floor(Math.random() * numberPool.length);
          var numbersChoice = numberPool[numbersIndex];
          return numbersChoice;
          console.log(numbersChoice);
        };
  
        function generateSpecial() {
          var specialIndex = Math.floor(Math.random() * specialCharactersPool.length);
          var specialChoice = specialCharactersPool[specialIndex];
        };

        if (!upperCaseLetters && !lowerCaseLetters && !numbers && !specialCharacters) {
          alert("No criteria established.")
        } else if (!specialCharacters) {
          var availableFunctions = [generateUpperCase(), generateLowerCase(), generateNumbers()];
          var availableIndex = Math.floor(Math.random() * availableFunctions.lnegth);
          


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
