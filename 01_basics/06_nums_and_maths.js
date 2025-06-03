const score = 200
// console.log(score)


const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))        // to get decimal number

const otherNumber = 123.4
// console.log(otherNumber.toPrecision(3))

const hundred = 100000000
// console.log(hundred.toLocaleString('en-in'))




//  +++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++


console.log(Math)
console.log(Math.round(4.5))
console.log(Math.ceil(3.2))
console.log(Math.floor(4.9))
console.log(Math.abs(-4))
console.log(Math.sqrt(4))
console.log(Math.max(3,5,7,19,3,1,4))
console.log(Math.random())
console.log(Math.floor(Math.random() * 10) + 1)


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)