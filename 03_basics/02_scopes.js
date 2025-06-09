// {} curly braces is scope

var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner: ",a)

}

// console.log(a)
// console.log(b)
// console.log(c)       


function one(){
    const username = "Nikhil"

    function two() {
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website)                     // gives error because it is used out of its scope

    two();
}
// one();


if(true){
    const username = "Nikhil"
    if(username === "Nikhil"){
        const website = " Youtube"
        //console.log(username + website);
    }
    // console.log(website)                 // again printing out of scope
}
// console.log(username)                       // here also printing out of scope



//  +++++++++++++++++++++++++  interesting  +++++++++++++++++++++++++++++


// console.log(addOne(5));                  // here you can access the function before the declaration in this syntax
function addOne(num){
     return num + 1
}
// console.log(addOne(5));


// addTwo(5)                              // cannot access the funtion before declaration in this syntax of declaring a function 
const addTwo = function(num){
     return num + 1
}
console.log(addTwo(5))                           // after declaring you can access it only