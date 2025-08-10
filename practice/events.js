// 1.
// const button = document.querySelector('#add-item-btn')
// const para = document.querySelector("#message-area")

// let count = 0
// function eventHandler(){
//     count++;
//     para.textContent = `the count is: ${count}`
// }
// button.addEventListener('click', eventHandler)

// ********************************* OR *******************************


// const button = document.getElementById('add-item-btn');
// const para = document.getElementById('message-area');

// // Step 2: Declare a 'let' variable for the count, initialized to 0.
// // This variable is declared outside the event listener so its value persists.
// let count = 0;

// // Step 3: Add a 'click' event listener to the button.
// // The event handler function is a simple, anonymous function.
// button.addEventListener('click', function() {
//   // Step 4: Increment the count variable.
//   count++;

//   // Step 5: Update the text content of the message area to display the new count.
//   para.textContent = `The count is: ${count}`;
//  });



// 2. add item and remove item
const addButton = document.querySelector("#add-item-btn")
const removeButton = document.querySelector("#remove-itm-btn")
const para = document.querySelector("#message-area")

let itemCount = 0
addButton.addEventListener('click', function(){
    itemCount++;
    para.textContent = `Item count is: ${itemCount}`
});
function remove(){
    if(itemCount > 0){
        itemCount--;
    }
    para.textContent = `Item count is: ${itemCount}`
}
removeButton.addEventListener('click', remove)