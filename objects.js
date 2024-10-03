// Objects - In JS objects are collections of key-value pairs. These key-value can stores various types of data including primitive values, function, another object

// ClassName obj = new ClassName() - An Object in Java

// There are several ways in which we can declare Objects in Javascript

// 1. Object literal - We use {key : value}
// 2. Object Constructor - new Object()
// 3. Factory Functions - A function which will return an object is known as Factory function
// 4. Class style
// 5. Constructor Function - new , this

// 1. Object literal - { key : value}
// Definition - Here we defines the object and it's property directly by using {}
// Syntax
/*

const obj = { 
        property1 : value1,
        property2 : value2,.....
        method : function(){
                //code
        }
    }

    obj.property1
*/

const person = { 
    name : "Rahul",
    age : 30,
    address : "Delhi",
    personInfo : function(){
        console.log("I am inside a function which is inside an object")
        console.log(this.name, this.age, this.address)
    }
}

console.log("line -39",person)



console.log(person.name) // Rahul
person.personInfo() // 
console.log(person["age"])

console.log("*************Object Constructor********")

// 2. Object Constructor - new Object()  - 
// Definition - Here we creates an object using new keyword and using a built in Object constructor
// Syntax
/*
const obj = new Object()
obj.property1 = value1,
obj.property2 = value2,.....
obj.method = function(){}
*/

const person1  = new Object()
person1.name = "John"
person1.age = 25
person1.person1Info = function(){
    console.log(this.name, this.age)
}

console.log(person1)
person1.person1Info()

console.log("*****3***********")
// 3. Constructor Function
// Definition - Here we creates an object using a function and using new keyword and the value of the property will be assigned using this keyword
// Syntax
/*
function ConstructorFunctionNAme(param1, param2....){
this.property1 = param1
this.property2 = param2
this.method = function(){}

const obj = new ConstructorFunctionNAme(agr1, arg2....)

*/

function Car(make, model, year){
    this.make = make // make :BMW
    this.model = model // model : i7
    this.year  = year // year: 2022
    this.carInfo = function(){
        console.log(this.make, this.model, this.year)
    }

}


const car1 = new Car("BMW", "i7", 2022)
console.log("line- 93",car1)

console.log(car1.make)
car1.carInfo()

const car2 = new Car("Toyoto", "Safari", 2024)
console.log(car2.make)
car2.carInfo()

const car3 = new Car("Audi", "Q4", 2023)
console.log(car3.make)
car3.carInfo()

// 4. Factory Function - A function which will return an object.
// Definition - Here we creates an object using a function and using return keyword and the value of the

// Syntax
/*
function FactoryFunctionNAme(param1, param2....){
    return {
    property1 : value,
    property2 :value2,
    method : function(){}
    }
}

const obj = FactoryFunctionNAme(arg1, arg2....)


    */

function CarInfo(make, model, year){
    return {
        make : make,
        model : model,
        year : year,
        carInfo : function() {
            console.log(this.make, this.model, this.year);
            }
    }
}

const carinformation = CarInfo("Audi", "Q7", 2024)
console.log(carinformation)


