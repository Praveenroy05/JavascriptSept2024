
/* 
var
let
const
*/


var i = 5 //

// var - Modern JS - we do not use

// 1. Scope -  Global or Functional scope
// 2. Variable decleared using var can be redeclared and reinitialzed
// 3. It is not mandatory to initialise the varaible at the time of declartion

// let - Value of the variable can be changed at any time of point
// 1. Scope - Block scope {}
// 2. Variable decleared using let can be reinitialzed but can not be redeclared
// 3. It is not mandatory to initialise the varaible at the time of declartion

// const  - Which is use to declare a constant variable - 

// 1. Scope  - Block scope {}
// 2. Variable decleared using const can not be redeclared and cannot reinitialzed
// 3. It is mandatory to initialise the value at the time of declaration


var i = 10; // Redeclartion
i = 15; // Reinitliastion

console.log("Printing i", i)

var name1

name1 = "Rahul"


var name = "Java" // globally
var t = 10
if(t>5){
    var name = "Python"
    console.log(name)
}

console.log(name)

console.log("Jave course", name)


let  j = 15
// let j = 25
// let
// 1. Scope - Block scope {}
// 2. Variable decleared using let can be reinitialzed but can not be redeclared
// 3. It is not mandatory to initialise the varaible at the time of declartion

let z

z = 15

if(j>10){
    let k = 20 // local variable {}
    console.log("Printing k", k)
}

//console.log("Printing k", k)


// const  - Which is use to declare a constant variable

// 1. Scope  - Block scope {}
// 2. Variable decleared using const can not be redeclared and cannot reinitialzed
// 3. It is mandatory to initialise the value at the time of declaration

const c = 23
//c = "Praveen"
console.log(c)
//const c = "T"


function add(){
    var x = 8
    console.log(x) // 8
}

add()
//console.log(x) // 

