# Rest Operator
The rest operator is used to collect multiple elements into a single array.

The rest operator is used in array destructuring.

# Rest Operator Use cases

## Rest in function parameters
When a function has multiple parameters but we don’t know how many arguments will be passed,the rest operator can be used.

```js
function myFunction(...numbers){
    console.log(numbers)
}

add(5,6);

add(2,3,4,5);

add(4);
```