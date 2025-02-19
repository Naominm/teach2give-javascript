# Data structures
A data structure is a wat of organizing and storing data so that it can be accessed and modified efficiently.

Basic built in data structures

1. Arrays

2. Objects

3. Sets

4. Maps

5. 

##  Arrays
A collection of elements stored in a contagious memory location.

### Creating an array
In javascript array can contain items of different data types.
To create an array you can either use.


- An array literal
- The **new Array()** constructor.


**An array literal**
```js
Let students=["Jane" , "Naomi" , "Brian" ,"Josh"];
```

**The **new Array()** constructor.**
```js
let students= new Array("Jane" , "Naomi" , "Brian" ,"Josh");
console.log(students)
```
**output**
```js
[ 'Jane', 'Naomi', 'Brian', 'Josh' ]
```
**Always use an array literal unless specified otherwise**

You can have an array inside of another array this is referred to as a **Multidimensional array**

```js

let students= [["Jane" , "Naomi" , "Brian" ,"Josh"],[1,56,30,39]];

console.log(students);
```
**output**
```js
[ [ 'Jane', 'Naomi', 'Brian', 'Josh' ], [ 1, 56, 30, 39 ] ]
```

### To access the elements in an array the use index.
The first element has an index of 0.

```js
//Accessing array items
let students= ["Jane" , "Naomi" , "Brian" ,"Josh"]

console.log(students[2]);
```

**output**
```js
Brian
```

To get the length of an array we use the length property

```js
//length of an array
let students= ["Jane" , "Naomi" , "Brian" ,"Josh"]

console.log(students.length);
```
**output**

```js
4
```

to get the last item in an array.
```js
//to get the last element in an array
let students= ["Jane" , "Naomi" , "Brian" ,"Josh"]

console.log(students[students.length-1]);
```
**output**
```js
Josh
```

## Basic array methods
1. **Length**
As shown earlier,this method returns the length of an array.

#### pop()
Removes the last item of an array.
```js
//pop method
let students= ["Jane" , "Naomi" , "Brian" ,"Josh"]

students.pop();
console.log(students); //[ 'Jane', 'Naomi', 'Brian' ]
```
#### push()
The push method adds element at the end of an array.
```js
//push method
let students= ["Jane" , "Naomi" , "Brian" ,"Josh"]

students.push("Mark");
console.log(students);//[ 'Jane', 'Naomi', 'Brian', 'Josh', 'Mark' ]
```
**returns the length of the new array**

#### shift()
The shift method removes the first item in an array.

```js
//shift method
let students= ["Jane" , "Naomi" , "Brian" ,"Josh"]

students.shift();
console.log(students);//[ 'Naomi', 'Brian', 'Josh' ]
```
**also returns the element that was removed

#### unshift()
Adds element to the begining of an array.
it returns new length of the array.
```js
//unshift method
let students= ["Jane" , "Naomi" , "Brian" ,"Josh"]

students.unshift("max");
console.log(students);//[ 'max', 'Jane', 'Naomi', 'Brian', 'Josh' ]
```
### to string()
converts all items to a string.
```js
let students= ["Jane" , "Naomi" , "Brian" ,"Josh"]


console.log(students.toString());//Jane,Naomi,Brian,Josh

```


#### Join()
converts all items to a string and you can specify the separator.

```js

//join
let students= ["Jane" , "Naomi" , "Brian" ,"Josh"]


console.log(students.join("++++")); //Jane++++Naomi++++Brian++++Josh
```

#### Concat()
 this method joins two or more arrays.
 ```js
 const arr1= ["Jane" , "Naomi" , "Brian" ,"Josh"]
const arr2= ["nate" , "lee" , "smith" ,"Duke"]


console.log(arr1.concat(arr2));
```
**output**
```js
[
  'Jane',  'Naomi',
  'Brian', 'Josh',
  'nate',  'lee',
  'smith', 'Duke'
]
```
#### flat()
 converts a multidimensional array into a single dimensional array
  ```js
  const students= [["Jane" , "Naomi" , "Brian" ,"Josh"],["nate" , "lee" , "smith" ,"Duke"],11,78,89,70]



console.log(students.flat());
```
**output**
```js
[
  'Jane',  'Naomi', 'Brian',
  'Josh',  'nate',  'lee',
  'smith', 'Duke',  11,
  78,      89,      70
]
```
#### IndexOf()
returns index of an element and -1 if false. It return the first index of that element.
```js
const arr1= ["Jane" , "Naomi" , "Brian" ,"Josh"]

console.log(arr1.indexOf("Naomi"));//1
```
#### lastIndexOf()
Returns the last index of that element.
```js
const arr1= ["Jane" , "Naomi" , "Brian" ,"Josh" , "peter", "john", "Naomi","Mary"]



console.log(arr1.lastIndexOf("Naomi")); // output 6
```
#### Includes()
checks if an element exist in an array. Returns true if it exist and false if it does not exist.
```js
const arr1= ["Jane" , "Naomi" , "Brian" ,"Josh" , "peter", "john", "Naomi","Mary"]

console.log(arr1.includes("Naomi")); // output  true
```
#### reverse()
Reverses the elements of an array.
```js
const arr1= ["Jane" , "Naomi" , "Brian" ,"Josh" , "peter", "john", "Naomi","Mary"]

console.log(arr1.reverse());
```

**output**
```js
[
  'Mary',  'Naomi',
  'john',  'peter',
  'Josh',  'Brian',
  'Naomi', 'Jane'
]
```












