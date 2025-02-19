# Default Parameters

Default parameters allow you to set a default value for function parameters if no argument is passed or if the argument is undefined.

This therefore makes the function more flexible.

```js
function sayHello(name="guest"){  // default parameter
   
    console.log(`hello ${name}`)
}
sayHello()
sayHello("bob")
```

**output**
```js
hello guest
hello bob
```