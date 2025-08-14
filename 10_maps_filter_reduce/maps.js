const newArray = originalArray.map(item => {

});


const numbers = [1,2,3,4,5,6]

// using a for loop(the old way)
const evenNumbersForLoop = []
for(let i = 0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenNumbersForLoop.push(numbers[i])
    }
}
console.log(evenNumbersForLoop)

const evenNumbersFilter = numbers.filter(number => {
    return number % 2 === 0;
})
console.log(evenNumbersFilter)