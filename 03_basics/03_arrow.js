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
chai();