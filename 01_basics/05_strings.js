const name = "Nikhil"
const repoCount = 50

// console.log(name + repoCount + " Value");       // don't use this type of code (old way)

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);    // use this type of code (modern way)
 
const gameName = new String('nikhil-nd')

console.log(gameName[0])
console.log(gameName.__proto__)

// console.log(gameName.toUpperCase())
// console.log(gameName.length)

console.log(gameName.charAt(2))
console.log(gameName.indexOf('l'))

const newString = gameName.substring(0, 5)        // cannot give -ve values in substring
console.log(newString)

const anotherString = gameName.slice(-8, 4)       // can give -ve valuse in slice
console.log(anotherString)

const newStringOne = "     Nikhil   "
console.log(newStringOne)
console.log(newStringOne.trim())            // it remove spaces in a string


const url = "https://nikhil.com/nikhil%20dalal"
console.log(url.replace('%20', '-'))         // it replaces the value from the original value to other you want to change

console.log(url.includes("nikhil"))      // it checks wheather it is present in the string or not and answer in true or false
console.log(url.includes("meds"))

console.log(gameName.split("-"))     // it split the string on the basis of you want to give or saparate