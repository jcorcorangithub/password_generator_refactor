var generateBtn = document.querySelector("#generate");

function writePassword() { // this calls the generatePassword function and sets it as an html element value, and displays it
  // var password = generatePassword(); 
  // var passwordText = document.querySelector("#password");
   
  // passwordText.value = password;

  document.querySelector("#password").value = generatePassword(); 
  //this accomplishes what the three lines above do but without creating any variables
}


function generatePassword() { // this function walks through the steps with the user to create a password and ends up creating it
  let numOfChars = parseInt(window.prompt("how many characters would you like. You must choose at least 8 and at most 128 characters"));
  while(isNaN(numOfChars) || numOfChars<8 || numOfChars>128){
    window.alert("invalid response");
    numOfChars = window.prompt("enter valid amount: Enter a number that is greater than or equal to 8 and less than or equal to 128");
  } 
  
  window.confirm("now you will select what character types you want your password to contain.\nFor each prompt, type 'y' if you would like that type of character to be included in the password criteria or 'n' if you would not.\nYou must choose at least one character type. If you do not choose any one the criteria will be selected for you");

  let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
  let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let numbers = [1,2,3,4,5,6,7,8,9,];
  let spcChars = ['!','#','$','%','&','*','?'];
  let finalCriteria = []; // after the user decides what char types to use, the following code will concat the appropriate arrays onto this array
  
  // need to figure out what to do if they do not input a y or n
  if(window.prompt("would you like lower-case letters in your password, y or n?")=="y") {
    finalCriteria = finalCriteria.concat(lowerCase);
  }
  if(window.prompt("would you like upper-case letters in your password, y or n?")=="y") {
    finalCriteria = finalCriteria.concat(upperCase);
  }
  if(window.prompt("would you like numbers in your password, y or n?")=="y") {
    finalCriteria = finalCriteria.concat(numbers);
  }
  if(window.prompt("would you like special characters in your password, y or n?")=="y") {
    finalCriteria = finalCriteria.concat(spcChars);
  }
  if(finalCriteria.length==0){//if the user does not choose any of the criteria or input a y or a n
    finalCriteria = finalCriteria.concat(lowerCase);
    finalCriteria = finalCriteria.concat(upperCase);
    finalCriteria = finalCriteria.concat(numbers);
    finalCriteria = finalCriteria.concat(spcChars);
  }
  
  let passwordString = "";
  //this will ultimately be the password

  let randomSelection = Math.floor(Math.random() * finalCriteria.length);  
  //this will choose the first index in the finalCriteria array at random
  
  for(i = 0; i < numOfChars; i = i + 1){
    passwordString = passwordString+""+finalCriteria[randomSelection];
    //this will take whatever item that was randomly selected and concatonates it to passwordString
    randomSelection = Math.floor(Math.random() * finalCriteria.length);
    //this will reset and randomly choose another item in the array, eventually concatonating it to the password
  }

  return "your password is "+passwordString;
}


generateBtn.addEventListener("click", writePassword);
