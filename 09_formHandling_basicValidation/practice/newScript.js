// Log Form Data:
const form = document.querySelector("#login-form")
form.addEventListener('submit', function(e){
    e.preventDefault();
    const usernameInput = document.querySelector("#username")
    const passwordInput = document.querySelector("#password")

    const username = usernameInput.value;
    const password = passwordInput.value;

    console.log(`username: ${username}`)
    console.log(`password: ${password}`)

    // basic validation

    const div = document.querySelector("#message-area")
    if(username === "" || password === ""){
       div.textContent = "Username and password cannot be empty!"
       div.style.color = "red"
    } else if(password.length < 6){
       div.textContent = "assword must be at least 6 characters long."
       div.style.color = "red"
    } else{
        div.textContent = "Login successful! Proceeding.."
        div.style.color = "green"
    }
})





