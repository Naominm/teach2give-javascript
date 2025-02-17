# Functions
A finction is a block of code that perfoms a specific task.

### Syntax
```js
function functionName(){
    // function body
  }
  ```
  **example**
  ```js
  function sayHello(){
  console .log("hello world");
}

 sayHello()// calling a function
 ```
 To use a function you must invoke it(Calling a function)
 Functions help us write reusable code.

  ## parameters / Arguments

  **Parameter**- variable declared in a function definition that acts as a placeholder for the value that will be passed to the function when the funtion is being called.

  **Argument**--actual value passed to a function when its being called. Actual piece of information that the function will operate on.

  Functions return values.
  Use a return keyword. Invoking functions that retun a value is not enough.
 
 Instead you can declare a variable and retun the result  via the variable.

 **example**
 ```js
 function add(num1,num2){
  return num1+ num2;
}
 const result = add(10 ,15); // this will print 25
 console.log(result);
 ```

 **output**
 ```js
 25
```

## Categories of Functions
 1.Functions that dont take pararameter and dont return a value

 **example**
 ```js
  function add(){
  let a=34;
  let b=68;
  console.log(a+B);
 }
 ```

 ##  Functions that dont take pararameter but return a value.

 **example**
 ```js
 function add(){
  let a=34;
  let b=68;
  return a+b;
 }

 let result = add();
 console.log(result);
 ```

 **output**
 ```js
 102
 ```

 ## Functions that take a parameter but do not return a value
 ```js
  function add(num1, num2){
 
  console.log(number1+number2);
 }
 add(34+67)
 ```

 ## Functions that take a Parameter and return a value
 **example**
 ```js
 function add(num1, num2){
  return num1+num2;
  }
  console.log(34+67)
  ```

  **Output**
  ```js
  101
  ```

  # Types of functions
  This also refers to the way funtions are written in javascript.

  1. Function declaration
  This involves saving a function to a variable.
   
   **for exapmple**
   ```js
    function add(num1, num2){
 
  console.log(number1+number2);
  ```

  2. Function expression / Anonymous Function

**example**
```js
 const add = function(num1, num2){
  
  console.log(number1+number2);

   }
   ```

3. Arrow Functions
 Introduvced in ES6.
 Are used to simplify how to write functions.
 Written as function expression without the fuction keyword but instead fat arrow if used.

 ```js
 const add = (a, b) => {
  return a + b;
};
```

1. if  an arrow fuction has one line in the body we can get rid of the cury braces.
```js
const add = (a , b)=>return a+b;
```

 2. if  an arrow fuction has one line  in the body and that one line happens to be a retun statement get rid of cury braces and also get rid of the return keyword.
 ```js
 const add = (a , b)=>a+b;
 ```

 3. if an arrow fuction has only one parameter get rid of the parenthesis.

 ```js
 const add = a=>a*a;
 ```

 ## Immediately invoked functions
  Are anonymous
  Are invoked immediately

  ```js
  (function() {
  console.log(5 * 5);
})();
```

**Output**
```js
25
```

You dont need to call them they are immediately invoked.

## callback functions
Funtions that are passed as arguments to other functions.
Mostly used in Asynchronous Javascript.

Call back functions are anonynous.

```js
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback();
}

greet("Naomi", () => {
  console.log("Nice to meet you");
});

```

**Output**
```js
Hello, Naomi
Nice to meet you
```