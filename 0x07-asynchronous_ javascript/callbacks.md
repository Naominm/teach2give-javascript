# Callbacks
Callbacks are one of the solutions for asynchronous programming in JavaScript.

```js
 function fetchData() {
    let data = { username: "carl peters", role: "user" };
    return data;
}

function showData(data) {
    console.log(`Username is ${data.username} and role is ${data.role}`);
}

const userData = fetchData();
showData(userData)
```

**output**
```html
Username is carl peters and role is user
```

 fetching data takes time, like when calling an API or reading from a database

 setTimeout() delays execution of the function, making it asynchronous.

 fetchData() does not wait for the data to be ready—it returns undefined immediately.

 When showData(userData) runs, userData is undefined, leading to errors.

 ## callback Function
 A callback function is a function passed as an argument to another function, ensuring that execution happens only after the asynchronous operation is complete.

 ```js
     function fetchData(callback) {
  setTimeout(() => {
    let data = { username: "carl peters", role: "Admin" };
    callback(data);
  }, 2000);
}

fetchData(function (data) {
  console.log(`Username is ${data.username} and role is ${data.role}`);
});
```

fetching data with multiple data points:

The indentation (callback hell) keeps increasing making the code harder to read.

Difficult debugging: If something goes wrong, finding the issue in nested callbacks is frustrating.

To avoid callback hell, we can replace callbacks with Promises, which provide better structure and readability.