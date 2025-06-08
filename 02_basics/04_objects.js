const tinderUser = new Object()         // singleton object
const tinderUser1 = {}                  // non singelton object

tinderUser.id = "nikhil@123"
tinderUser.name = "Nikhil"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "nikhil@gmali.com",
    fullName: {
        userfullName: {
            firstName: "Nikhil",
            lastName: "Dalal"
        }
    }
}
// console.log(regularUser.fullName.userfullName)

const obj1 = {
     1: "a",
     2: "b"
}
const obj2 = {
     3: "a",
     4: "b"
}
const obj4 = {5: "a", 6:"b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)           // giving an empty object in to store in memory // {} it  is target and obj are sources

const obj3 = {...obj1, ...obj2, ...obj4}     // same spread as array
// console.log(obj3)

const users = [                                  // array of objects (lot of objects in an array)
    {
        id: 1,
        email: "nikhil21@gmail.com",
    },
    {
        id: 1,
        email: "nikhil21@gmail.com",
    },
    {
        id: 1,
        email: "nik@gmail.com",
    },
    {
        id: 1,
        email: "nikhil21@gmail.com",
    },
]
// console.log(users[2].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))              // gives the keys present in object
// console.log(Object.values(tinderUser))            // gives the values of keys present in object
// console.log(Object.entries(tinderUser))           // gives the keys and values present in objest

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))      //check the value is present in object or not



// destructuring 

const course = {
    courseName: "Js in hindi",
    coursePrice: 999,
    courseInstructor: "Hitesh Chaudhary"
}
// course.courseInstructor


const {courseInstructor: instructor} = course             
console.log(instructor)

const navbar = ({company}) => {           // destructuring in react
}                        

navbar(company = "Nikhil") 


// JSON API

// {
//     "name": "Nikhil",
//     "courseName": "Js in Hindi",                          // api can be in object 
//     "price": "free"

// }

// [
//     {},
//     {},                                      // api can be in array
//     {}
// ]