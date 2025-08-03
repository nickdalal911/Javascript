// 1
const mainHeading = document.querySelector('#main-heading')
mainHeading.textContent = "Dom Manipulation Rocks!"
mainHeading.style.color = "blue"

// 2
const paraElement = document.querySelectorAll('.intro-paragraph')
paraElement.forEach(para => {
    para.classList.add('highlight')
    console.log(para)
})

// 3
const imageElement = document.querySelector('#dynamic-image')
imageElement.setAttribute('src','https://via.placeholder.com/150/FF0000/000000?text=Red')
imageElement.setAttribute('alt','Placeholder Red Image')

// 4
const buttonElement = document.querySelector('button')


const unList = document.querySelector('#item-list')
const newLi = document.createElement('li')

newLi.textContent = "New Dynamic Item"
unList.appendChild(newLi)

// 5
// Step 1: Select the parent element, which is the <ul>.
unList = document.querySelector('#item-list')
// Step 2: Find the last <li> child.
newLi = unList.lastElementChild
// Check if the item exists before trying to remove it
if(newLi){
    // Step 3: Call the .remove() method directly on the child element itself.
  // This is a simpler and often preferred way to remove an element.
    newLi.remove()
}