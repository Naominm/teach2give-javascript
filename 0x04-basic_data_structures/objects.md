# Objects
An object is a collection of key value pairs.

Objects are used to store information of real world entities.

keys are also referred to as **properties**

A function inside an object is referred to as **method.**

## Creating an Object
 Javascript provides the following ways to create objects.

- Object literal

- using **new Object()**

- using a constructor function

### Using an Object literal
using curly braces
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering"
}
```
**a more complex object**
```js
const property={
    name:"Ane-plaza",
    location:{
        country:"Kenya",
        county:"Muranga",
        location:"kiharu"
    },
    type:"Business",
    Partners:["josh","ann","mary"],
}
```
### Using new Object()
Not very popular
```js
const student =new Object();

    student.firstName="Naomi";
    student.lastName="Smith";
    student.age="30";
    student.major="software engineering";
 ```

### Constructor function
A regular function used with the new keyword to create multiple objects with shared property and methods.

```js
//constructor function
function Student(firstName,lastName,age, major){
    // always start with a capital letter
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.major=major;

}
const naomi=new Student("Naomi","Smith","25","software")

console.log(naomi)
```

**output**
```js
Student {
  firstName: 'Naomi',
  lastName: 'Smith',
  age: '25',
  major: 'software'
}
```
this keyword refers to the object itself.
**Never use an arrow function inside an abject instead use a function expression**

```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
    sayHello:function(){
        console.log(`hello my name is ${student.firstName}`);
            }
}
student.sayHello()
```
**output**
```js
hello my name is Naomi
```

using the this keyword is much better
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
    sayHello:function(){
        console.log(`hello my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
            }
}
student.sayHello()
```
**output**
```js
hello my name is Naomi Smith and i am 30 years old
```
**Arrow functions do not have the this keyword.  Arrow functions should never be used in objects**

### Accessing an object
#### 1. Using the dot notation

As done earlier with the dot notation.

```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
    sayHello:function(){
        console.log(`hello my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
            }
}
console.log(student.firstName);
```
**output**
```js
Naomi
```

#### 1. Using the bracket notation
accesses the  object using square brackets using the property as a string.
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
    sayHello:function(){
        console.log(`hello my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
            }
}
console.log(student.firstName);
console.log(student["lastName"]);
```
**output**
```js
Naomi
Smith
```
Both dot and bracket notation have their own use cases.

The bracket notation is particularly useful when we do not know the properties are not known before hand.

### Modifying Objects
you can use dot or bracket notation to add new properties to objects
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
    sayHello:function(){
        console.log(`hello my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
            }
}
student.school="SCIT";
console.log(student);
```

**output**
```js

  firstName: 'Naomi',
  lastName: 'Smith',
  age: '30',
  major: 'software engineering',
  sayHello: [Function: sayHello],
  school: 'SCIT' //has been added
}
```

with bracket notation
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
    sayHello:function(){
        console.log(`hello my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old`);
            }
}
student.school="SCIT";
student["highschool"]="muranga high",

console.log(student);
```

**output**

```js
{
  firstName: 'Naomi',
  lastName: 'Smith',
  age: '30',
  major: 'software engineering',
  sayHello: [Function: sayHello],
  school: 'SCIT',
  highschool: 'muranga high'
}
```
### Updating property
you can use dot or bracket notation

```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}
student.firstName="Nayomi Njeri"
student["lastName"]="sherry"

console.log(student);
```
**output**
```js
{
  firstName: 'Nayomi Njeri',
  lastName: 'sherry',
  age: '30',
  major: 'software engineering'
}
```
### Deleting a property
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

delete student.major
delete student.age
console.log(student);
```

**output**
```js
{ firstName: 'Naomi', lastName: 'Smith' }
```

### Checking properties in an object
1. Using in keyword
2. the  hasOwnProperty()

### The in Keyword
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

console.log("firstName" in student); // true
console.log("middleName" in student);// false
```

**output**
```js
true
false
```
### hasOwmProperty()
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

console.log(student.hasOwnProperty("major"))// true
console.log(student.hasOwnProperty("cat"))// false
```

## Objects Methods
**object.keys(objectName)**

Returns an array containing all the keys of an object
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

console.log(Object.keys(student))
```

**output**
```js
[ 'firstName', 'lastName', 'age', 'major' ]
```
**object.value(objectName)**

returns an array of values.

```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

console.log(Object.keys(student))
console.log(Object.values(student))
```

**object.entries(objectName)**

Returns an array of key value pairs.

```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

console.log(Object.entries(student))
```

**output**
```js

  [ 'firstName', 'Naomi' ],
  [ 'lastName', 'Smith' ],
  [ 'age', '30' ],
  [ 'major', 'software engineering' ]
]
```


**object.freeze(objectName)**
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

Object.freeze(student)
student.middleName="Doe" // you cant add, update, or delete as its freezed
console.log(student)
```
**output**
```js
{
  firstName: 'Naomi',
  lastName: 'Smith',
  age: '30',
  major: 'software engineering'
}
```

**object.seal(objectName)**
You can update but you cant add or delete
```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

Object.seal(student)
student.firstName="jane"
student.middleName="Doe" // you cant add, update, or delete as its freezed
console.log(student)
```

**output**
```js
{
  firstName: 'jane',
  lastName: 'Smith',
  age: '30',
  major: 'software engineering'
}
```

## Iterating over on object
use the for in loop

```js
const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

Object.seal(student)
student.firstName="jane"
student.middleName="Doe" // you cant add, update, or delete as its freezed
console.log(student)

for (let keys in student){
    console.log(keys)
}
```

**output**
```js
firstName
lastName
age
major
```