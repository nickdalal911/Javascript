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

// 3.

function countEvenAndGreaterThanTen(numberArray){
    let count = 0
    for(i =0; i < numberArray.length; i++){
        if(numberArray[i] % 2===0 && numberArray[i] > 10){
            count++
            
        }
    }
    return count
}
const array = [12, 5, 22, 10, 18, 7, 30]
const result = countEvenAndGreaterThanTen(array)
console.log(result)

