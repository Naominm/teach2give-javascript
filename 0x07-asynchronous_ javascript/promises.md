# Promises
When working with asynchronous code, we never know beforehand when we will get the results, also, we don't know if the results will be a success or a failure.

When working with asynchronous JavaScript, there is the concept of producing code and consuming code.

1. Producing code: is code that will take some time to complete.

2. Consuming code: code that must wait for results from producing code.

A promise is an object that links producing and consuming code.

It is a readable way to handle asynchronous operations compared to callbacks.

## states of Promises

1. Pending: initial state; neither fulfilled nor rejected.

2. Fulfilled: the operation is completed successfully.

3. Rejection: the operation has failed.

## Creating a Promise
A promise is created using the new Promise() constructor.

The new Promise() constructor accepts a single argument called executor.

Promise executes the executer function immediately.

The executor function takes two parameters: the first parameter is a function to call with a value when the promise is fulfilled (mostly referred to as resolve), and the second is a function to call when the promise fails (mostly referred to as reject)

**for example**
```js
let myPromise = new Promise(function (resolve, reject) {
  let x = 5;
  if (x === 5) {
    resolve("x is 5");
  } else {
    reject("x is not 5");
  }
});
```

## consuming a promise
We can use .then() to handle resolved value and .catch() to handle errors (rejected value).

.then() takes a callback function, which receives the resolved value of the Promise as its argument.

.catch() also takes a callback function, which receives the error (rejected value) as its argument when the Promise is rejected.

```js
let myPromise = new Promise(function (resolve, reject) {
  let x = 5;
  if (x === 5) {
    resolve("x is 5");
  } else {
    reject("x is not 5");
  }
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
  ```
  **output**
  ```js
  x is 5
  ```

  There is also .finally() which gets executed regardless of whether the promise was a success or failure;

  ```js
  let myPromise = new Promise(function (resolve, reject) {
  let x = 9;
  if (x === 5) {
    resolve("x is 5");
  } else {
    reject("x is not 5");
  }
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("This is a promise")});
```

**output**
```js
x is not 5
index.html:28 This is a promise
```

## Returning a promise from a function

```js
function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = false;
    if (error === true) {
      reject("There is an error");
    } else {
      resolve({ username: "_cooper", role: "Admin" });
    }
  });
}

fetchUser()
  .then((user) => {
    console.log(`Username: ${user.username}, Role: ${user.role}`);
  })
  .catch((error) => {
    console.log(error);
  });
```

**output**
```js
Username: _cooper, Role: Admin
```