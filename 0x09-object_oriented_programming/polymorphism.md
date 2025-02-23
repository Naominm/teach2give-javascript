# Polymorphism
Allows variable or a method to have more than one form.

Achieved through:

1. Method overriding: child class provides its own implementation of a method that it has inherited.

2. Method overloading: feature that allows multiple methods in the same class to have the same name but different parameters. **It is not supported in Javascript**

**polymorphism with method overriding:**
```js

class Math {
    add(number1, number2) {
      return number1 + number2;
    }
  }
  
  class Arithmetics extends Math {
    add(num1, num2) {
      if (num1 < 0) {
        console.log("Number must be positive");
      } else if (num2 < 0) {
        console.log("Number must be positive");
      } else {
        console.log(num1 + num2);
      }
    }
  }
  
  const arithmetic = new Arithmetics();
  arithmetic.add(-8, 8);
  arithmetic.add(8, -8);
  arithmetic.add(10, 8);
```
**output**
```js
Number must be positive
Number must be positive
18
```