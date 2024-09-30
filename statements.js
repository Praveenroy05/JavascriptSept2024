//Statements or conditions
// Condition in JS allows us to execude different block {} based on different condition.

// if statement
// if else statement
// if else if else statement
// switch statement

// if statement - if stsement is used to execute a block of code if the specified condition is true
// Syntax 
/*
 if (condition) { // true or false
     // code to be executed if condition is true
 }

*/


// 2 types of codition
// 1. if the button is vailable then click on  - Keyword (pen) - 
// 2. Search option with company name - Company name


// 2. if the button is not available then do nothing

if(5>10){ //false
    console.log("5 is greater than 2");
}

// if else
// if else statement is used to execute a block of code if the specified condition is true and else
// block of code if the specified condition is false.


/* 

if(text){
    console.log("Success")
}else{
    console.log("Failed")
}
*/
let math = 89
if(math >90){ // 89>90 //false
    console.log("A");
}else{
    console.log("B");
}

//if else if else if else

// Multiple conditions will be validate one will inside if()
// other condition will be inside else if() ....

// Syntax:

/*
if(condition){
    // code to be executed if condition is true
}else if(condition){
    // code to be executed if condition is true
}else if(condition){
    // code to be executed if condition is true
}else{
    // code to be executed if condition is false
}

*/

//let browser = "edge"

// chrome, firefox and safari browser, edge

let browser = "edge"

if(browser === "chrome"){
    console.log("Chrome browser");
}else if(browser === "firefox"){
    console.log("Firefox browser")
}else if(browser === "safari"){
    console.log("Safari browser");
}else{
    console.log("Other browser");
}


// Switch statement - 
// Syntax
//
/*
switch (browser) {
    case "chrome":
        // code 
        break;
    case "firefox":
        // code
        break;

    default:
        // code
}
    */

console.log("**********Switch***********")
let browserName = "safari"

switch(browserName){ // switch("firefox")
    case "chrome":
        console.log("Chrome browser");
        break;
    case "firefox":
        console.log("Firefox browser");
        break;
    case "safari":
        console.log("Safari browser");
        break;
    default:
        console.log("Edge browser");
}
