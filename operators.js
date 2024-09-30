// 1. Arthimetric op - An operationwhich performs mathematical operations
// 2. Comparison op
// 3. Logical op
// 4. Assignment op


// Addition +
//add 2 more
// Numeric - add the values
// String  - concat

let num1 = "TS"
let num2 = "JS"
let sum = num1+num2
console.log(sum)

// Subtraction -
let num3 = "TS"
let num4 = "Java"
let diff = num3 % num4
console.log(diff)

// Multiplication *
let num5 = 2
let num6 = 5
let product = num5 * num6
console.log(product)
// Division /
let num7 = 10
let num8 = 2
let quotient = num8 / num7
console.log(quotient) 

// Modulus % (Ramainder of division)
let num9 = 11
let num10 = 3
let remainder = num9 % num10
console.log(remainder)

// Increment (++) - Increase the value by 1
// Pre increment - Action will be performed after the value will be incremented

let a = 10 // ++a
console.log(++a) // a=10 // ++10 = ++a = a = a+1 // ++10 = 10+1


// Post increment - Action will be performed and then the value will be incremented.

let num11 = 15 // num11++
console.log(num11++) // num11 = 10 // num11++ = num11+1
console.log(num11) // 11

// Decrement (--) - decrease the value 1

// Pre decrement - Action will be performed after the value will be decremented

let b =20
console.log("pre decrement",--b) // --b = b=b-1 // --20 // 19 // 

let c = 30
console.log(c--) // c-- // c=c-1 // 30 // 29
console.log("Post decrement", c)

console.log("*********************************************")

//2. Comparison operator - Compare the two values and return a boolean result (true or false)
// Equal to ==  // It will comapre the value but not the data type
let num12 = 10
let num13 = '10'
console.log(num12 == num13)


// Not equal !=
console.log(num12 != num13)

// Striclty equal ===
let d = 12
let e = '12'
console.log(d === e)

// Strictly not equal !==
console.log(d !== e)

// Greater than >
let f = 5
let g = 5
console.log(f > g) // false
// Less than <
console.log(f < g) // false
// Greater than or equal to >=
console.log(f >= g) // true
// Less than or equal to <=
console.log(f <= g) // true

console.log("*************************************")
// Logical Operators - Eavaluate a boolean (true of false) - true or false
// AND (&&) - Both the conditions should be true // (a>b) && (c>d) - TRUE
// OR (||) - One of the condition have to be true to diplay the values as true
// NOT (!) - Negate the boolean value

console.log((1>3) && (10>6)) // (1>3) - false &&  true //- false
console.log((10>3) && (5>4)) // true

// OR (||) -- 
console.log((1>3) || (10>6)) // true
// NOT (!)
// !true = false
// !false = true


console.log("*********************")

//Assignment Op
// = - Assign the value to the variable - let h = 16
// +=  h += 10
let i = 16
//i = i+4
i += 4 // i = i+4
console.log(i)
// -=
i -= 4 // i = i-4
// *=
i *= 2 // i = i*2
// /=
i /= 2 // i = i/2
// %=






