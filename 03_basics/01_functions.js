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
// console.log(loginUserMessage())                // if you don't pass the argument then it will return undefined


function calculateCartPrice(...num1) {             // here (...) is called a rest operator not spread oprator
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))     // here rest operator will store all the values of cart in an array automatically

function calulateCart(val1, val2, ...num1){
    return num1
}
// console.log(calulateCart(200, 300, 500, 2000, 1000, 33))

const user = {
    username: "Nikhil",
    price: 100
}

function handleObject(anyobject) {
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    username: "Sam",
    price: 199
})
const newArray = [200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(newArray))
console.log(returnSecondValue([200, 300, 400]))