// 1.
function checkAgeAndChangeStatus(age){
    const para = document.querySelector('p')
    if(age >= 18){
    para.textContent = "Welcome, you are an adult!"
    para.style.color = "green"
}
else {
    para.textContent = "You are a minor."
    para.style.color = "red"
}
}

checkAgeAndChangeStatus(12);

// 2.

const products = [
    {name: "laptop", price:1200},
    {name: "mouse", price: 25},
    {name: "keyboard", price: 75}
]
function displayProducts(productsArray){
    const productList = document.querySelector('ul')

    for(let i = 0; i<productsArray.length; i++){
        const product = productsArray[i];
        const newListItem = document.createElement('li')

        newListItem.textContent = `${product.name} - $${product.price}`
        productList.appendChild(newListItem)
    }

}

displayProducts(products)