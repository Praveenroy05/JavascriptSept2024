// Array - A special type of variable in JS which stores more than one value. The value can be of same data type or of a different DT as well.

// 2 ways in which we can declare an array in JS


// 1. Using the array literal syntax
// 2. Using array constructor - new 

// 1. Array literal
// Syntax 
// let array = [value1, value2,.....]
// index in array starts from 0
let numericArray = [1, 2, 3, 4, 5]; // [index:value]
let stringArray = ["JS", "TS", "Java", "Apple"] // [0:"JS", 1:TS, 2:Java, 3:Apple .....]
let mixedArray = [1, "JS", 3.5, true, null, undefined]

console.log(stringArray[0]) // JS


console.log(numericArray)
console.log(stringArray)
console.log(mixedArray)

console.log(Array.isArray(numericArray)) // true or false
console.log(Array.isArray(stringArray))
console.log(Array.isArray(mixedArray))

// 2. Array Constructor

let array = new Array("Apple", "Orange", 23, 4,5, true)
console.log(array)
console.log(Array.isArray(array))

let array1 = 12
console.log(Array.isArray(array1))

console.log("************Methods in Array **************")

// 1. length  - which is useful for caluctaing the count of element in an array
console.log(mixedArray.length)

// 2. push() - add one or more element at the end of array

// Syntax - arrayname.push(value1, value2,.....)

let testArray = [1,2,3,"fruits", "apple", "JS"]
console.log(testArray)

// Java
testArray.push("Java", "Pink")
console.log(testArray)

// 3. pop() - removes the last element from an array
// Syntax - arrayname.pop()
testArray.pop() // remove pink
console.log(testArray)

// 4. unshift() - which is add one or more element at the begining of an array
// Syntax - arrayname.unshift(value1, value2,.....)
testArray.unshift("C#", "Python")
console.log(testArray)

// 5. shift() - removes the first element of an array
// Syntax - arrayname.shift()
testArray.shift() // remove C#
console.log(testArray)

// 6. slice() - Portion of an array
// Syntax - arrayname.slice(startIndex, endIndex)
// startIndex - start index of the portion
//endIndex - This is exclusive 

// arrayname.slice(0,3) // EndIndex = endindex-1

console.log(testArray.slice(0,3)) // lastIndex-1 // 0-2

console.log(testArray.slice(4,8)) // 8-7
console.log(testArray.slice(4,))

// What is diff b/w slice() and splice()

console.log("******Splice()*************")

// 7. splice() - We can add or remove OR add and remove the elements in/from an array at the same time

// Syntax - arrayname.splice(startIndex, deleteCount, item1, item2,.....)

// StartIndex = index at which to start changing the array
// deleteCount (optional) = number of elements to delete
// item1, item2,..... (optional) = elements to add to the array

let array2 = [1,2,3,"JS", "pink", "colour", 23.5] // 0 -6 // 7
console.log(array2)

array2.splice(2, 3, "Blue", "car", 67, 89)
console.log(array2)

let array3 = [1,2,3,"JS", "pink", "colour", 23.5] // 0 -6 // 7

console.log(array3)
array3.splice(0, 0, "TS", "Orange", "Python") // 
console.log(array3)

// indexof, includes, sort, map, foreach, filter, reduce, some, every, toString , join, concat

// 8. indexOf() - Return the first index at which a given element is matching
// Syntax

let array4 = [1,5,10,15,"Banana", "pink", "blue", 15, "india", 15, 15, 34, 15] // -1 // 15
// arrayname.indexOf(searchElement, fromIndex)

console.log(array4.indexOf(15))
console.log(array4.indexOf(15, 4))
console.log(array4.indexOf("JS")) // -1

let index = array4.indexOf(15) // 3
while(index != -1){
    console.log("Multiple index: " , index) //3
    index = array4.indexOf(15, index+1)

}

console.log(array4.indexOf(15)) // 3,7


// 9. includes()  - Checks whether an array includes the searchelement

// Syntax - arrayname.includes(searchElement, fromIndex) // true or false
// searchElement - element to search for
// fromIndex(optional) - index at which to start searching

console.log(array4.includes("JS"))
console.log(array4.includes("india"), array4.indexOf("india"))

// 10. toString() - Use to convert an array into String
// Syntax - arrayname.toString() // string

console.log(array4)
console.log(array4.toString())

// 11. foreach(function) - Execute a function once for each element an array

// Syntax - arrayname.forEach(function(currentValue, index, arrayname){ // code}) // undefined

// currentValue - current element being processed
// index(Optional) - index of the current element being processed
// arrayname(Optional) - the array the current element belongs to


let array5 = ["pink", "blue", "yellow", "apple", "orange"]


array5.forEach(function(currentValue, index){ // currentValue = pink, index = 0
    console.log(currentValue, index) // 
})

// 12. map(function) - Create a new array with the result of calling the function on every
// element in the array
// Syntax:
// arrayname.map(function(currentValue, index, arrayname){ // code}) // array

let array6 = [1,2,3,4,5] // 1*1, 2*2, 3*3

for(let i=0; i<array6.length; i++){
    console.log(array6[i]*array6[i])
}

console.log("*******************")

let square = array6.map(function(number){ // 1 2 3
    return number * number // retunr 1*1
})
console.log(square)


// 13. filter(function) - Create a new array with all the elements that passes the function that we provide as a parameter
// Syntax : 
/*

arrayname.filter(function(currentvalue, index, array){
// code
})

*/

let array7 = [10,20,30,40,50] 

// let arrayresult =[]
// for(let i=0; i<array7.length; i++){
//     if(array7[i] > 30){
//         console.log(array7[i])
//         }
// }

const filterResult = array7.filter(function(a){
    return a > 30
})
console.log(filterResult)



// 14 . reduce(function) - 
// Syntax - 
/*
arrayname.reduce(function(accumulator, currentValue, index, array){
// code
}, initialvalue(optional))
*/
// accumulator - The acumating values from the previously retuned value in the last invocation

//let array7 = [10,20,30,40,50] // 10+20+30....

let sum = 0
for(let i=0; i<array7.length; i++){
    sum = sum+ array7[i] // sum = 0+10 // 10 +20
}

const reduceResult = array7.reduce(function(sum, element){
    return sum + element
})
console.log(reduceResult)

// 15. some(function) - Checks whether at least one element in the array passes the function that we provide as the parameter true or else false
// SYntax
/*
arrayname.some(function(currentvalue, index, array){
// code
})
*/

//let array7 = [10,20,30,40,50] 
const someresult = array7.some(function(number){
    return number >10
})
console.log(someresult)

// 16. every(function) - 
/*
arrayname.every(function(currentvalue, index, array){
    // code
})
*/

const everyresult = array7.every(function(number){
    return number >10
})
console.log(everyresult)


// 17. concat - It conact more than one array

let one = [1,2]
let two = [3,4]

console.log(one.concat(two))




