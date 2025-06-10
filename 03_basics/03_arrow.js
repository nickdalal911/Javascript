const user = {
    username: "Nikhil",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website.`)

        console.log(this);                                 // current variables
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);                         // in the browser the global object is (window) object

function chai(){
    let username = "Nikhil"
    console.log(this.username);
}
// chai();

// arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2                                // explicit return
// }

// const addTwo = (num1, num2) => num1 + num2           // implicit return in this you doesnt have to write the return just for single statement
const addTwo = (num1, num2) => (num1 + num2)         // again doesnt have to write return
console.log(addTwo(3,4))

const user1 = (num1, num2) => ({username: "Nikhil"})

console.log(user1(3,4))

// const myArray = [3,4,5,6,3]
// myArray.forEach(() => {})                   // arrow function can be written like this also