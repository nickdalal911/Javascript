// array 

const myArr = [2,4,5,6,3]
// console.log(myArr)


const heros = ["Shaktiman", "naagraj"]
const myArr2 = new Array(2,4,6,3,6)
// console.log(myArr[1])


// array methods

// myArr.push(6)       // to add values in array
// myArr.push(9)
// myArr.pop()       // to remove the last values in the array


// myArr.unshift(0)      // to add value in the starting value of an array
// myArr.shift()         // to remove the starting value of an array
// console.log(myArr)

// console.log(myArr.includes(7))      // check the value in array
// console.log(myArr.indexOf(5))      // tell the index of value


// const newArr = myArr.join()       // join() will bind and convert the array in string
// console.log(newArr)
// console.log(typeof newArr)


// Slice , Splice

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)               // slice doesn't manipulate the original array 
console.log(myn1)

console.log("B ", myArr)
const myn2 = myArr.splice(1, 3)               // splice manipulate the original array
console.log(myn2)
console.log("C ", myArr)