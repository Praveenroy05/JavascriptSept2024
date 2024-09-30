// Functions

// public String functionanem(parameter){
//     return -- 
// }

// syntax - To declare a function in JS
/*
function functionName(parameter){
    // code 
    return 
}
*/

// In JS there are 2 types

// 1. Named Function - A function which will be declared along with the name - a function which will have a name 
// Syntax 
/*
function functionName(parameter){
// code
}
*/
console.log("**********Named Funciton***********")
// Example
function add(a,b){ // a,b - parameter // a=10, b=30 // function add(10,30){console.log(10+30)} //40
    console.log(a+b)
}
add(10,30)

console.log("********Anonymous Function*************")

// 2. Anonymous function - Unnamed function - A function which will not have any name is known as AF

// 2.A - Function Expression

let sum = function(a,b){ 
    console.log(a+b)
}

sum(12,13) // 25

console.log("********Arrow Function*************")

// 2.B - Arrow Function

// Syntax- 
/*

const functionName =(parameter) =>{
    //code
}

*/

//Ex: - 



let arrowFnSum = (a,b)=>{ 
    console.log(a+b)
}

arrowFnSum(9,8)

let arrowFnSum1 = (a,b)=> a+b

let sum1 = arrowFnSum1(34, 45)
console.log(sum1);


// 2. C - IIFE - Immediately invoked Function Expression - IT is not useful for Test Automation

// AN IIFE function that is executed immeditely after it is declared
// Syntax -
/*
(function(){
// code body
})()
*/

(function(){
    console.log("Hello, I am an IIFE Function")
})
()
console.log("********Constructor Function*************")

// 2.D  - Constructor Function - Not usable in terms of TA
// Syntax -
/*
var variable = new Function(arg1, arg2..., Function Body)

*/

const addition = new Function('a','b','c', 'console.log(a+b+c)')

addition(10,20,30)

// Higer order function - A function which will take a parameter as another function or a function if it return the function itself

// map, filter, some, every, reduce

