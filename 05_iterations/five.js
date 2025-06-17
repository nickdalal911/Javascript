const coding =["js", "rb", "cpp","java", "python"]

// coding.forEach(   function (item) {
//     console.log(item)
// })      // you can name anything inside the () other than item


// coding.forEach(   (val) => {
//     console.log(val)
// })


function printme(item){
   console.log(item)
}

// coding.forEach(printme)


coding.forEach(   (item, index, arr)  => {
    // console.log(item, index, arr)
})


const myCoding = [
    {
    langName: "javascript",
    langFileName: "js"
},
{
    langName: "java",
    langFileName: "java"
},{
    langName: "python",
    langFileName: "py"
}]

myCoding.forEach( (item) => {
    console.log(item.langName)
})