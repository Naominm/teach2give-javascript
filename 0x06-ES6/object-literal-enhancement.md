# Object Literal Enhancements
These enhancements include:

## Shorthand Property Names
If a variable name matches the property name, you can omit the value assignment.

```js
const firstName = "Naomi";
const lastName = "smith";
const age = 25;

const user = { firstName, lastName, age }; // earlier
//const user = { firstName: firstName, lastName: lastName, age: age }; 
console.log(user); 
```

## Method shorthand
You can define methods in an object without using the function keyword.

```js
const user = {
    firstName: "Naomi",
    lastName: "Smith",
    age: 25,
   message() {
      console.log(`My name is ${this.firstName} ${this.lastName}`);
    },
// Before es6
// message: function () {
//     console.log(`My name is ${this.firstName} ${this.lastName}`);
//   },


  };
  user.message();
  ```

  ## Computed Property Names
  You can use expressions as property names by wrapping them in square brackets [].

  ```js
  const user ={
    ["first" +"Name"]:"Carl",
    lastName:"Peters",
    age:100,
};

console.log(user)
```

**output**
```js
{ firstName: 'Carl', lastName: 'Peters', age: 100 }
```