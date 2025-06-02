// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)      //false

// const bigNumber = 343225353456346n
console.log(typeof(bigNumber))   // bigInt


// Reference  (Non primitive)
// Array, Objects, Functions


const hero = ["Shaktiman", "Naagraj", "Doga"]


let myObject = {
     name: "Nikhil",
     age: 21,
}

const myFunction = function(){
    console.log("Hello Nikhil")
}
console.log(typeof(myObject))       // object
console.log(typeof(myFunction))     // function
console.log(typeof(outsideTemp))    // by checking with typeof null value it gives object
