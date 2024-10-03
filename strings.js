// String  - sequence of character

// 1. Using single quote - String literal 
// 2. double quote - string literal
// 3. String construtor
// 4. Template literal by using backtick (``)

let singleQuote = 'This is a single quote string'
let doubleQuote = "This is a double quote string"
let stringConstructor = new String("This is a string constructor string") //- Which we never use in terms of automation
let templateLiteral = `This is a template literal string` // Whenever we have to append another string inside a string.

let name1  = "JS"
let greet = `Welcome to ${name1}`
console.log(greet)

// 1. length - 
// Syntax
// stringName.length

let str = "Hello, World" // 
console.log(str.length)

// 2. charAt(index) - 
// Syntax

// stringName.charAt(index)
// index - 0 based index of the character in the string.
// Returns the character at the specified index in a string.

console.log(str.charAt(5))

// 3. concat(string1....) - Joins 2 or more string and return a new string
// Syntax
// stringName.concat(string1, string2, string3...)
// Returns a new string that is the result of concatenating the strings.

let str1 = "Hello"
let str2 = " World"
// Hello World
console.log(str1.concat(str2))
console.log(str1+str2)

// 4. includes() - Check if a string contains a specified string or character
// Syntax
// stringName.includes(searchString, position)

let str3 = "This is a string in javascript"
console.log(str3.includes("Javascript")) // true or false

console.log(str3.includes("i",6)) // true or false

console.log("********Starts with**********")
// 5. startsWith(searchString) - Check if a string starts with the specified character

console.log(str3.startsWith("is")) // true or false

console.log("********ends with**********")

// 6. endsWith(searchString) - Check if a string ends with the specified character

console.log(str3.endsWith("This")) 

// 7. indexOf() - Returns the position of the first ocuurance of specified value in a string
// Syntax
// stringName.indexOf(searchValue, position)

// Returns the index of the first occurrence of the specified value in a string.
// Returns -1 if the specified value is not found.

console.log(str3.indexOf("javascript"))
console.log(str3.indexOf("is"))

// 8. lastIndexOf() - Returns the position of the last occurance of a specified value in a string
// Syntax

// stringName.lastIndexOf(searchvalue, fromIndex)

//let str3 = "This is a string in javascript"

console.log(str3.lastIndexOf("is"))

// 9. replace(searchValue, newValue)
// Syntax
// stringName.replace(searchValue, newValue)
// Replaces the first occurrence of a specified value with another value.
// Returns a new string with the replacement made.

let str4 = "Hello World"
console.log(str4) // 
console.log(str4.replace("World", "Javascript"))

// 10. slice(startIndex, endindex)

console.log(str4.slice(1,8))

// 11. split(separator) - Splits a string into an array of string
// Syntax
// stringName.split(separator)
let str5 = "HelloWorldWorld1World2World3"

console.log(str5.split("W"))

//11. substring() - Extract character from a string between the specified indexes
// Syntax
// stringName.substring(startIndex, endIndex)
// Returns a new string that includes the characters from the start index up to but not including the end

console.log(str4.substring(0,5))

// 12. toLowerCase() - Converts a string to lowercase letters
// Syntax
// stringName.toLowerCase()

let str6 = "This is a string in JS"
console.log(str6.toLowerCase())



// 13. to Uppercase() - Converts a string to upercase letters
// Syntax
// stringName.toUpperCase()
console.log(str6.toUpperCase())

// 14. trim() - Removes whitespace from the begining and end of the string
// Syntax
// stringName.trim()

let str7 = "          This is a string           "
console.log(str7.length)
console.log(str7)
console.log(str7.trim().length)


// 15. trimStart() - 
console.log(str7.trimStart().length)


//16. trimEnd() - 
console.log(str7.trimEnd().length)









