const marvel_heros = ["Thor", "Iron Man", "Captain America", "Hawkeye"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[4][1])

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)        // concat combines 2 or more array and returns a new array
// console.log(allHeros)


const allNewHeros = [...marvel_heros, ...dc_heros]      // ... method spreads the array
// console.log(allNewHeros)

const anotherArray = [[1,2,4], 3,6, [3,4,[3,5]]]
const realAnotherArray = anotherArray.flat(Infinity)     
// console.log(realAnotherArray)

// console.log(Array.isArray("Nikhil"))               // check is it an array
// console.log(Array.from("Nikhil"))                 // convert to an array
// console.log(Array.from({name: "Nikhil"}))  //interesting will give empty array

let score1 = 100
let score2 = 100
let score3 = 100
console.log(Array.of(score1, score2, score3))