# JavaScript Classes
In ES6, javascript introduced  the class syntax making, OOP more structured.

A class refers to a blueprint for creating an object.

## Creating a Class
use the class keyword followed by the class name.

Inside the class. you define a constructor method to initialize object properties.
```js
class User {
    constructor(name, age) {
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`my name is ${this.name}`);
    }
}
```

The constructor method initializes the object's properties.

## Creating instances of a class
```js
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
```

**output**
```js
Hello my name is Will smith
```