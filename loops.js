// loop - Loop will execute the same block of code multiple times

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("******************")

for (let i=1; i<=5; i++){ // 1<=5 2<=5 3<=5 4<=5 5<=5 6<=5(false)
    console.log(i) //1 2 3 4 5
}

// for loop
// Syntax
/*
for (initialization; condition; increment/decrement) {
 code to be executed
}

initialization - initialize the variable to start with the loop. Ex: - let i=1
condition - It will check if the condition is true of false - Ex: - i <=5
increment/decrement - i++/i-- 
*/


console.log("*******While loop***********")

// while loop
// Syntax- 


/*

initilization ;
while (condition) {
code to be executed
++/--
}
*/

// Example - 1...5
let i = 1;
while(i<=0){ 1<=0
    console.log(i)
    i++
}
console.log("********Do While**********")


// do while loop
// A do-while loop is similar to the while loop, except that it guarantees the loop will run at least once before the condition is checked.

// Syntax- 
/*
do {
    // Code to be executed
  } while (condition);
  
*/
let J = 1;
do{
    console.log(J) // 1
    J++ // 1++ =2
}while(i<=0); //false

/*
let enteredPassword;

do {
  enteredPassword = prompt("Enter your password:");
  
  if (validatePassword(enteredPassword)) {
    console.log("Access granted.");
  } else {
    console.log("Invalid password, try again.");
  }
} while (!validatePassword(enteredPassword));

*/

// for of loop - will be used to iterate over the values of iterator objet like array, string etc etc

console.log("********For of loop**********")

/*

for (variable of iterable) {
  // Code to be executed
}

*/

let array = [1,3,"JS", "Apple", true] // [0:1, 1:3, 2:"JS", 3:APple, 4:true] // 0-4 = 5
// for(let i=0; i<array.length; i++){
//     console.log(array[i]) // array[1] = 3
// }

for(let element of array){ //
    console.log(element) // 1 3 ... true
}

console.log("********For in loop**********")
// for in loop - This will be used for iterating through a property of any object in JS

let person = {name: "John", age:30, city : "NY"} // {key :value}
//person[naem] = "NY"
// Syntax
/*
for (variable in object) {
    // Code to be executed
  }
    */

for(let a in person){  // name age
    console.log(a, person[a])// = john 30 
}







