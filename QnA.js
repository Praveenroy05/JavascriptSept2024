const person1  = new Object()
person1.name = "John"
person1.age = 25
person1.person1Info = function(){
    console.log(this.name, this.age)
}

//console.log(person1)
person1.person1Info()