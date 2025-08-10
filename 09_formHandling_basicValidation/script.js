const loginForm = document.querySelector('#login-form')


// getting inputs

// loginForm.addEventListener('submit', function(e){
//     e.preventDefault();  // It stops the browser's default behavior of reloading the page.
//     // console.log("Form was submitted, but the page did not reload!")

// const usernameInput = document.querySelector("#username")
// const passwordInput = document.querySelector("#password")

// const username = usernameInput.value;
// const password = passwordInput.value;

// console.log("Username: ", username)
// console.log("Password: ", password);
// })


// Basic Validation

loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    const usernameInput = document.querySelector('#username')
    const passwordInput = document.querySelector("#password")
    const username = usernameInput.value;
    const password = passwordInput.value;

    const messageArea = document.querySelector("#message-area")
    
    if(username ==="" || password===""){
        messageArea.textContent = "Please fill in both fields."
        messageArea.style.color = "red";
    } else{
        messageArea.textContent = "Form submitted successfully!"
        messageArea.style.color = "green"
    }
})