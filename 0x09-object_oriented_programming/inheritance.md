# Inheritance
It allows one class to inherit properties and methods from another class.

Inheritance is implemented using the extends keyword with ES6 classes.

Inheritance is used when there is a "is-a" relationship.

It helps avoid code duplication where multiple classes share common behavior.

```js
class Human {
    constructor(numLegs, numEyes) {
      this.numLegs = numLegs;
      this.numEyes = numEyes;
    }
    move(){
        console.log(`Person has ${this.numLegs} legs` );
        console.log(`Person has ${this.eys} eyes`)
    }
    eat(){
        console.log("Human eat for survival")
    }
}

class Person extends Human{
    constructor(numEyes,numLegs,Gender){
    super(numLegs, numEyes)
    this.gender=this.gender
}
}

const Naomi=new Person(2,2,"Male")
Naomi.move()
Naomi.eat()
```

**output**
```js
Person has 2 legs
Person has undefined eyes
Human eat for survival
```