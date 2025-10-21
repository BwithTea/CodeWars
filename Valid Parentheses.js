//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parenStr) {
  // Initialize a balance variable to keep track ok both Parenthesis
  var balance = 0
  
  // Split the str and create a new array
  var parenArr = parenStr.split("")
  
  // Iterate over the new Parenthesis array
  for(i = 0; i < parenArr.length; i++) {
    // Initialize each index to str variable
    var str = parenArr[i]
    console.log(str,i)
    
    if(str === "(") { // Check if left Parenthesis
      console.log("Found left")
      balance++
      
    }else if(str === ")"){ // Check if right Parenthesis
      console.log("Found right")
      balance--
    }
    // Check if balance is negative
    if(balance < 0){
      return false
    }
    console.log(balance)
  }
  // Return true or false based on balance value
  return balance === 0
}
