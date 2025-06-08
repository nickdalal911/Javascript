// console.log("N")
// console.log("I")
// console.log("K")
// console.log("H")
// console.log("I")
// console.log("L")



function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}
// sayMyName();

// function addTwoNumbers(number1, number2) {              // number1, number2 are parameters
//       console.log(number1 + number2)
// }
// addTwoNumbers(3, 5);                                  // 3, 5 are arguments


function addTwoNumbers(number1, number2) { 
    //   let result = number1 + number2             
    //   return result                                     // nothing will print after return statement

    return number1 + number2
}

const result = addTwoNumbers(3,5);
// console.log("Result: ",result)

function loginUserMessage(username){            // if we give the value of username here then it will not check the if code directly return the username
    if(!username){                              // means username === undefined
        console.log("Please enter a username")
        return
    }
     return `${username} just logged in `
}

// loginUserMessage("Nikhil")                  // it will not print the value
// console.log(loginUserMessage("Nikhil"))        // this will print      
console.log(loginUserMessage())                // if you don't pass the argument then it will return undefined
