const h1 = document.querySelector('#main-heading')

function onClick(){
    h1.textContent = "You clicked me!"
    console.log(h1.textContent)
}

h1.addEventListener('click', onclick)