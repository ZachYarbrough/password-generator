// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var charCount = prompt('How many characters do you want in your password? (8 - 128)');
  if(parseInt(charCount) < 8) {
    alert('Password must contain more than 8 characters.');
    return generatePassword();
  } else if(parseInt(charCount) > 128){
    alert('Password must contain less than 128 characters.');
    return generatePassword();
  } else if(parseInt(charCount) <= 128 && parseInt(charCount) >= 8) {
    var includeLowerCase = confirm('Do you want to include lower case letters in your password?');
    var includeUpperCase = confirm('Do you want to include upper case letters in your password?');
    var includeNumbers = confirm('Do you want to include numbers in your password?');
    var includeSpecial = confirm('Do you want to include special characters in your password?');
  } else if(charCount === null) {
    return;
  } else {
    alert('You need to type a number for the password length.');
    return generatePassword();
  }

  var newPassword = '';
  var newCharArray = '';
  var lowerCaseChar = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '1234567890';
  var specialCases = '!"#$%&${}()*+,-./:;<=>?@[\]^_`{|}~';

  if(includeLowerCase){
    newCharArray += lowerCaseChar;
  }
  if(includeUpperCase) {
    newCharArray += upperCaseChar;
  }
  if(includeNumbers) {
    newCharArray += numbers;
  }
  if(includeSpecial) {
    newCharArray += specialCases;
  }
  if(newCharArray === '') {
    alert('You need to select at least one of the prompts!');
    return generatePassword();
  }

  for(var i = 0; i < charCount; i++) {
    newPassword += newCharArray.charAt(Math.floor(Math.random() * newCharArray.length));
  }

  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(password !== undefined) {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
