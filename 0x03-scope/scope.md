# Scope
Scope determines where variables are acessible.

## 1. Global scope
a variable declared outside of any function or block has a global scope.
its acessible anywhere in your js program.

```js
let global = "I'm a global variable";

function showGlobal() {
  // Accessible inside the function
}
// Accesible  outside a function
```
** working example**
```js
let age = 30;// global variable

function myAge() {
return age;// i can acess it here inside a funtion
}

console.log(`i am ${age} years old`); //acessing the variable outside the function

console.log('my age is', myAge());//calling the function to acess the variable
```

**output**
```js
i am 30 years old
my age is 30
```



## 2. Function scope
local scope/ function scope
 any variable declare d inside a fuction is only accesible  within the function and not anywhere else
 ```js
 function Example() {
  let local = "function-scoped variable";
  console.log(local); // are only acessible inside the funtion.
}
```

**working example**
```js
function myAge() {
let age = 30;// functional scope variable
return age;// i can acess it here inside a funtion
}

// console.log(`i am ${age} years old`); //acessing the variable outside the function will lead to an error theerefore i have commented for it to work

console.log('my age is', myAge());//calling the function to acess the variable
```

**The output is**
```js
my age is 30
```

 ## 3. Block Scope
 Brought about by let and const.
 Introduced in ES6.
If you use var the variable is not block scoped

Any variable declared inside a cury brace(within a block) is block scpoed.
Its only acessible within that block.

```js
if (true) {
  let blockVariable = "block-scoped";
  console.log(blockVar); // with the let and const the variable
  // var does not follow block scope.
}
```
**for example**
```js
if (true) {
    let age = 25;
    console.log(age); //this works fine as it is inside the block
    // var does not follow block scope.
  }
  console.log(" this is how old i am", age); //this will lead to an Error: age is not defined
  ```

**output**
I will have teo results one works fine and an error.

```js
C:\Users\hp\Documents\teach2give-javascript\0x03-scope>node main.js
25
C:\Users\hp\Documents\teach2give-javascript\0x03-scope\main.js:6
  console.log(" this is how old i am", age); //this will lead to an Error: age is not defined
                                       ^

ReferenceError: age is not defined
```

var dosent folow block scope

**An example of tring to use  the same example but with var**

```js
if (true) {
    var age = 25;
    console.log(age); //using var that dosent  have a block scope
    // var does not follow block scope.
  }
  console.log(" this is how old i am", age); // var works as it is not block scoped
  ```

  **output**
  ```js
  25
 this is how old i am 25
 ```

## 4.  lexical scope
Its possible to have a function inside another function.
When we nest a fuction we end up creating lexical scope.
The child fuction can acess variable of its parent

**Output**
```js
function outerFunction(){
    let age=25;

function innerFunction(){ // this child function can acess the variable of its parent
    console.log(`age = ${age}`)
}
innerFunction()
}
outerFunction()
```

**output**
```js
age = 25
```

But variable of inner function canot be acessed by the parent

**example**
```js

function outerFunction(){
    let age=25;
    console.log(` my favourite dish = ${favouriteDish}`)

function innerFunction(){
     // this child function can acess the variable of its parent
     let favouriteDish="pasta";
    console.log(`age = ${age}`)
}
innerFunction()
}
outerFunction()
```

**output**
```js
C:\Users\hp\Documents\teach2give-javascript\0x03-scope\main.js:4
    console.log(` my favourite dish = ${favouriteDish}`)
                                        ^

ReferenceError: favouriteDish is not defined
```
   
