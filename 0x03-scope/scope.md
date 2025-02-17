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

## 2. Function scope
local scope/ function scope
 any variable declare d inside a fuction is only accesible  within the function and not anywhere else
 ```js
 function Example() {
  let local = "function-scoped variable";
  console.log(local); // Aonly acessible inside the funtion.
}
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

var dosent folow block scope

## 4.  lexical scope
Its possible to have a function inside another function.
When we nest a fuction we end up creating lexical scope.
The child fuction can acess variable of its parent

But variable of inner function canot be acessed by the parent
   