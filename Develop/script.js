// Assignment Code
var generateBtn = document.querySelector("#generate");

//i added lines 5-8 
generateBtn.addEventListener("click", generatePassword);
function generatePassword() {
  window.confirm("this happens when you click that button");
  return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // right now this funtion is undefined
  var passwordText = document.querySelector("#password"); 
  
  
  passwordText.value = password;
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



























// window.alert("alert"); //this should be used when a message does not require a response
// //window.confirm("message"); 
// window.prompt("input something"); //prompts the user to input text 