// singleton 

// literal objects
const mySym = Symbol("Key1")

const JsUser = {
    name: "Nikhil",
    "full name": "Nikhil Dalal",            // cannot access with (JsUser.full name)
    age: 18,
    [mySym]: "Mykey1",
    location: "Delhi",
    email: "nikhil22csu478@ncuindia.edu",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])    // only this method is used for string value

// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

// console.log(JsUser)
JsUser.email = "NickHero@gmail.com"
// Object.freeze(JsUser)                      // freeze will not let any further changes in the object
JsUser.email = "nsdhimmae@gmail.com"
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello Js User")
}

console.log(JsUser.greetings())

JsUser.greetings2 = function(){
    console.log("Nikhil")
}