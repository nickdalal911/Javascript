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
