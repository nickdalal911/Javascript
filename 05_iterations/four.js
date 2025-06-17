const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for(const key in myObject){
    // console.log(key)
    // console.log(myObject[key])
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const myArr = ['js', 'rb', 'py', 'java', 'cpp']

for(const key in myArr){
    // console.log(myArr[key])
    // console.log(`${key} key is for ${myArr[key]}`)
}

const map = new Map()
map.set('In', 'India')
map.set('Fr', 'France')
map.set('Fr', 'France')
map.set('USA', 'United States of America')

// for(const key in map){
//     console.log(key)          // map is not iteratable
// }

