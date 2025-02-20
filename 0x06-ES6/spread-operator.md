# spread Operator
(...) The spread operator allows you to expand elements of an iterable (like arrays, objects) into individual elements.

## Use cases of the Spread Operator
### Expanding an array
It  takes the elements in an array and spreads them individually.

```js
const numbers =[7,8,9,6];

console.log(...numbers)

const subjects=["English","science"]
console.log(subjects)
```

**output**
```js
7 8 9 6
[ 'English', 'science' ]
```

### Copying arrays
it can be used to copy array elements which help to avoid changing the original array.

```js

const array =[4,5,6];

const copy=array;
copy.push(55);

console.log(array);

// in this example the array has been mutated to avoid this lets have example 2

// example two

const array1 =[1,2,3,4];

const my_copy=[...array];

my_copy.push(80)

console.log(array1)
```

**output**

```js
[ 4, 5, 6, 55 ]
[ 1, 2, 3, 4 ]
```

### Merging arrays
the spread operator can be used to merge arrays

```js
const array1=[4,5,6];

const array2=[7,8,9];

const merged=[...array1, ...array2]

console.log(merged)
```

**output**
```js
[ 4, 5, 6, 7, 8, 9 ]
```

### Adding elements from one array to another

```js
const array1=[3,4,5]

const newElements=[1,2, ...array1,6,7,8,9]

console.log(newElements);
```

**output**

```js
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
```

### copying Objects

```js

const person={name:"naomi", age:"24"};

const copy={...person}

console.log(copy)
```

**output**
```js
{ name: 'naomi', age: '24' }
```

### Merging Objects

```js
const person={name:"naomi"};

const age ={age:"24"};

const merged={...person, ...age};

console.log(merged)

```

**output**
```js
{ name: 'naomi', age: '24' }
```

### Overwriting Properties

```js
const User={name:"naomi", role:"User"};

const updatedUser={...User, role:"Admin"};

console.log(updatedUser)
```

**output**
```js
{ name: 'naomi', role: 'Admin' }
```
