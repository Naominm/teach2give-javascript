# Introduction to fetch and HTTP Requests

**fetch** is a built in Javascript function that allows your code to communicate with other computers (servers) over the internet.

It enables your code to receive data from external websites or API's.

# HTTP Request
Hypertext Transfer protocol is how devices communicate over the web.

### Types of HTTP Request
**GET**: a computer asks for data.

**POST**: A computer sends data to be created on the server.

**PUT**: A computer request for data updates.

**DELETE**: A computer request for data to be deleted.

# fetch request
A simple fetch request with a public API.

```js
  fetch ("https://jsonplaceholder.typicode.com/users")
        .then(function(response){
            return response.json();

        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(error){
            console.log("An error occurred");
            console.log(error);
        } );
```


**fetch** Asks the server for user data.

```js
fetch ("https://jsonplaceholder.typicode.com/users")
```

The response come back but its not readable yet. We convert it to JSON (A format that our computer can understand)
```js
   .then(function(response){
            return response.json();

        })
```

Receives data from the previous step and displays it in the user's console
```js
   .then(function(data){
            console.log(data);
        })
```

if an error occurred this section gets executed.

```js
 .catch(function(error){
            console.log("An error occurred");
            console.log(error);
        }
```

# Using async await for easier syntax
```js
 async function fetchUser(){
    try {
       const response=await fetch(
        "https://jsonplaceholder.typicode.com/users/"
       );
       const data=await response.json();
       console.log(data);
        
    } catch (error) {
        console.log("An error occurred",error);
    }

 }
 fetchUser();
 ```
 # Handling Errors
 ```js
     async function fetchUser(){
    try {
       const response=await fetch(
        "https://jsonplaceholder.typicode.com/users/"
       );
       if (!response.ok){
        console.log("something went wrong");
        return;
       }
       const data=await response.json();
       console.log(data);
        
    } catch (error) {
        console.log("An error occurred",error);
    }

 }
 fetchUser();
 ```
