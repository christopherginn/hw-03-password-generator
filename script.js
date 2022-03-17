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

        // Log to console to ensure entries are accurate
        console.log("Password length:", passwordLength)
        console.log("Upper Case letters:", upperCaseLetters);
        console.log("Lower case letters:", lowerCaseLetters);
        console.log("Numbers:", numbers);
        console.log("Special Characters", specialCharacters);
      } else {
        alert("Sorry, your entered an invalid option.");
      }
    }
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
