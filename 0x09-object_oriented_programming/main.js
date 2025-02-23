
class User {
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello my name is ${this.name}`);
    }
}

const person1=new User("Will smith",30);
person1.greet();
