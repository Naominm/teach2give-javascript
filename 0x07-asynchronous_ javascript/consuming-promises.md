# Consuming Promises With Async/Await

async/await is the modern way to handle asynchronous operations in JavaScript.

async/await is mostly used to consume promises.

It's built on top of Promises but  it allows you to write asynchronous code that looks like synchronous code.

```js
  function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = true;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_cooper", role: "Admin" });
    }
  });
}

async function processUser() {
  const user = await fetchUser();
  console.log(user);
}

processUser();
```

**output**
```js
index.html:25 Uncaught (in promise) There was an error
```

## Handling Errors in async/await
async/await have the ability to  handle errors in a synchronous way using try...catch

```js
 function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = true;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_cooper", role: "Admin" });
    }
  });
}

async function processUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch {
    console.log("Err"); //catch block can also receive the error/
  }
}

processUser();
```
```js
  function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = true;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_cooper", role: "Admin" });
    }
  });
}

async function processUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

processUser();
```

try..catch also has a finally block:

```js
function fetchUser() {
  return new Promise(function (resolve, reject) {
    let error = true;
    if (error === true) {
      reject("There was an error");
    } else {
      resolve({ username: "_cooper", role: "Admin" });
    }
  });
}

async function processUser() {
  try {
    const user = await fetchUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  } finally {
    console.log(`Process completed`);
  }
}

processUser();
```

**output**
```js
There was an error
index.html:29 Process completed
```