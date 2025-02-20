# Asynchronous JavaScript
Asynchronous JavaScript refers to the execution of JavaScript without blocking the main thread, allowing other operations to continue while waiting for other tasks to complete.

In JavaScript, asynchronous programming is done using Promises.
```js
setTimeout(() => {
    console.log("JavaScript");
  }, 2000);
  
  console.log("Hello World");
  console.log("Goodbye World");
```

```html
Hello World
index.html:17 Goodbye World
index.html:13 JavaScript
```