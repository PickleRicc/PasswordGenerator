let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Grap the Elements from the DOM to manipulate
let mainButton = document.getElementById("main-button")
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")


function generatePassword() {
// Reset the Content so each time the button is clicked user starts with new password
passwordOne.textContent = " "
passwordTwo.textContent = " "

// a for loop running through 15 iterations then it will stop once it reaches 15. 
 for (let i=0; i<15; i++){
  // declare a variable that will randomly select a character from the character array 15 times.
   let getDigits1 = Math.floor(Math.random()*characters.length)
   let getDigits2 = Math.floor(Math.random()*characters.length)
   //replaces the content in this element with the random characters from the character array. 
      passwordOne.textContent += characters[getDigits1]
      passwordTwo.textContent += characters[getDigits2]

   }
} 


