var generateBtn = document.querySelector("#generate");


// Step2
function writePassword() {
  // var password = generatePassword(); 
  // var passwordText = document.querySelector("#password");
   
  // document.querySelector("#password").value = password;       I added this line as a substitute for the next line 
  // passwordText.value = password;

  document.querySelector("#password").value = generatePassword();
}

// Step1
generateBtn.addEventListener("click", writePassword);

// Step3
function generatePassword() {
  let numOfChars = parseInt(window.prompt("how many characters would you like. You must choose at least 8 and at most 128 characters"));
  while(isNaN(numOfChars) || numOfChars<8 || numOfChars>128){
    window.alert("invalid response");
    numOfChars = window.prompt("enter valid amount: Enter a number that is greater than or equal to 8 and less than or equal to 128");
  } 
  
  window.confirm("now you will select what character types you want your password to contain.\nFor each prompt, type y if you would like that type of character to be contained or n if you would not.\nYou must choose at least one character type. If you do not choose any one the criteria will be selected for you");

  let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
  let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let numbers = [1,2,3,4,5,6,7,8,9,];
  let spcChars = ['!','#','$','%','&','*','?'];
  let finalCriteria = [];
  
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
  if(finalCriteria.length==0){
    finalCriteria = finalCriteria.concat(lowerCase);
    finalCriteria = finalCriteria.concat(upperCase);
    finalCriteria = finalCriteria.concat(numbers);
    finalCriteria = finalCriteria.concat(spcChars);
  }
  // now i have to randomly choose an amount of items equal to numOfChars in the array finalCriteria.
  // create a varibale that will be the password as a string and concatonate each item that is randomly chosen into the string
  
  

  


  

  //prompt the user to ask them what criteria they want to include
  //    num of chars (8-128)
  //        have them type in a valid amount
  //    lowercase, uppercase, numeric, and/or special characters
  //        have them check at least one and all that apply
  //    is this correct(present options selected)?




  //    return value will be passed into the writePassword function

  return "num of characters is "+numOfChars+"\ncharacter types consist of "+finalCriteria;
}



// window.alert("alert"); //this should be used when a message does not require a response
// //window.confirm("message"); 
// window.prompt("input something"); //prompts the user to input text 