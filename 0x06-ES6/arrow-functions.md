# Arrow Functions

Arrow functions provide a more concise syntax for writing functions in Javascript.

they remove the need of a function keyword and have a shorter syntax.

**earlier functions**
```js
function add(a,b){
    return a+b;
}

console.log(add(6,8));// output 14
```

**with arrow functions**

    ```js
    const add =(a,b)=> a + b ;

console.log(add(6,8));
```