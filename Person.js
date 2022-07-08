class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    gretting(){
        return `Hello, my name is ${this.name}, i'm ${this.age} years old`
    }
}
module.exports=Person