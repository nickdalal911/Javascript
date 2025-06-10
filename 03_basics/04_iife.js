// Immediately Invoked Function Expression

function chai(){
    //  named iffe
    console.log("DB connected")
}
chai();                  // simple function  and always put semicolon after calling a function so if there is iife in code it will not give an error

(function code(){
    console.log("DB connected")
})();

((name) => {
    //  simple iffe
    console.log(`DB connected now ${name}`)
})('Nikhil');