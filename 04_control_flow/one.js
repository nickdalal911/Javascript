// if

if (true){
   // condition should be true to execute the code
}
if (false){
    // if condition is false the code will not execute 
}

const isUserLoggedIn = true
const temprature = 41
if(temprature > 50){
    //   console.log("less than 50");
} else{
    // console.log("Temperature is greater than 50");
}
// console.log("executed");


// <, >, <=, >=, ==, !=, ===(strict equal-> checks all the things and even the data type)

const score = 200
if(score > 100){
    const power = "fly"
    // console.log(`User power: ${power}`)
}

// console.log(`User power: ${power}`)         // used out of scope



const balance = 1000

// if(balance > 500) console.log("test"), console.log("Test2"),   
// console.log("test3");                // can write like this also but not good 

// if(balance < 500){
//     console.log("less than");
// } else if(balance < 750){
//     console.log("less than 750")
// } else if(balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    // console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    // console.log("User Logged in");
}






