# hw-03-password-generator

Password Generator

## Description

I wanted to make password generator that can be used to generate a random password based on a user selected criteria to protect sensitive data.

This Password Generator does just that! Refer to the Usage section of this README for further details on how this generator works.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

For installation, this application requires 3 files to be associated together in order to work. 
index.html is coded to display the content.
style.css is coded to style element used in the index.html file.
script.js contains the code for the generate to function and return a randomly generated password to be displayed on index.html.

Place the files in the same repository on Github for easy deployment.

While in the repository, select Settings and then select Pages that appears on the left side. 

On the Github pages screen, select the Branch drop down menu under the Source section and select 'main.' Then click Save. A URL with appear where the site has been published.

## Usage

The Screen Capture hyperlinked below loosely shows how the application works. The screen capture software I use could not show the prompt windows in the capture.

![Screen Capture](./images/generatepassword.gif)

When the page is loaded, a user can click "Generate Password" to begin establishing the criteria for the new password. 

The first prompt is ask the user to indicate how many characters should be in the password. The company has directed that passwords must be 8 - 128 characters long so that has been set for this PAssword Generator. It can be changed if password length requirements change over time. If a user enters a number outside of that range, they are given an alert stating that their input was invalid and a password is not generated.

The next series of prompts are "yes" or "no" questions in regards to character type. Upper Case letters, Lower case letters, numbers, and special characters. (Note: if a user answers "no" to all of the prompts, user will be alerted that the generator will not return a password)

Based on the user's answers to these Y/N prompts will dictate which types of characters are included or excluded in the password.

After the criteria is established, randomizer functions will generate a password. An alert will appear to reveal the new password. Upon clicking Okay in the alert, the newly generated password will display in the textarea on the index.html page.

## Credits
index.html and style.css were provided by GT Bootcamp.

script.js was provided and modified by Chris Ginn.

To learn how to convert an array to a string, I discovered this solution on bobbyhadz.com that goes over how to use .join with an array.
https://bobbyhadz.com/blog/javascript-convert-array-to-string-without-commas#:~:text=To%20convert%20an%20array%20to,joined%20by%20the%20provided%20separator.&text=Copied!



## License

[GNU General Public License v3.0](/COPYING.txt)


