# High Order Array Methods
They simplify operations on arrays by allowing us to apply functions to elements directly, improving both readability and maintainability.

**For Each**
Executes a function on each array element but returns nothing.

It does not create a new array.
```js
const numbers=[3,4,5,6,7];

numbers.forEach((num)=>{
    console.log(num*2);
});
```
**output**
```js
6
8
10
12
14
```

**map**
Map method creates a new array populated with the results of calling provided function on every element.
```js
const numbers=[1,2,3,4,5];

const doubled=numbers.map((num)=>num*2);

console.log(doubled);
```
**output**
```js
[ 2, 4, 6, 8, 10 ]
```

**filter**
filter() method creates a new array with all elements that pass the test implemented by the provided function.

It returns a new array

```js

const numbers=[1,2,3,4,5];

const evenNumbers=numbers.filter((num)=>num%2===0);

console.log(evenNumbers);
```

**output**
```js
[ 2, 4 ]
```

**reduce**
executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
```

**output**
```js
15
```

**find**
method returns the value of the first element in the array that satisfies the provided testing function. or undefined.

```js
const numbers = [1, 2, 3, 4, 5];

const found = numbers.find((num) => num==4);
console.log(found);
```
**output**
```js
4
```

**findIndex**

Returns the index of the first element that matches a condition.

```js
const numbers = [1, 2, 3, 4, 5];

const index = numbers.findIndex((num) => num==4);
console.log(index);
```

**output**
```js
3
```

**some**
Checks if at least one element passes a condition. if so, returns true. 

otherwise returns false.

```js
const numbers=[1,3,5];

const hasEven=numbers.some((num)=>num%2===0);

console.log(hasEven);

```

**output**
```js
false
```
