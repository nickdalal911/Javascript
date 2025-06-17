// for of

["","",""]
[{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num)
}

const greetings = "Hello World!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}


// Maps

const map = new Map()
map.set('In', 'India')
map.set('Fr', 'France')
map.set('Fr', 'France')
map.set('USA', 'United States of America')

// console.log(map)


for(const [key, value] of  map){
    // console.log(key, ":-", value)           // will only print unique values not duplicate
    
}


const myGames = {
    game1 : 'NFS',
    game2 : 'tomb raider'
}

// for(const [key, value] of Object){
//      console.log(key,':-', value)
// }