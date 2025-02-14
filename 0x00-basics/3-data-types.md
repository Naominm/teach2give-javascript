# Data types
Indicates what type of data a variable is holding.

In javascripts there are two categories of datatypes.

1. **Primitive Datatypes**
2. **Reference Datatypes**

## **Primitive Datatypes**
1. String
2. Number
3. Boolean
4. Null
5. Undefined 
6. BigInt
7. Symbol

### String
A string has single quotes **''** double quotes **""** or even backtick **``**
```js
let firstName="John";
let lastName ='Smith';
let favouriteDish=`pasta`

console.log(`${firstName} ${lastName} ${favouriteDish}`)
```
**Output**
```js
John Smith pasta
```
### Number
This is also a primitive data type in javascript.
how to use this datatype:

```js
let age=25; //integer
let score=68;//integer
let notANumber=NaN;//not a number

console.log(`${age} ${score} ${notANumber}`)
```

**Output
```js
25 68 NaN
```
 ### Boolean
 Boolean values return either be true of false. They are used in decision making.

  ```js
 let isMale=true; //datatype if boolean
 let isFemale=false;//bollean

 ```
### The difference between Null and Undefined
#### Undefined
A variable that has been declared but has not been assigned anything.
#### Null
 Unlike undefined null means intentional absence  of a value.

#### BigInt
  BigInt used for numbers beyond MAX_SAFE_INTEGER

  The MAX_SAFE_INTEGER  in javascript is 9007199254740991

  #### typeOf()
   The type of function shows the  type of datatype in a variable.

 **Example**

 ```js
    let age=50; //Number
    console.log(typeof(age));
```

**Output**

```js
    number
 ```


  ## Reference Datatypes
  Below are the reference datatypes in javascript.
  1. Object
  2. Arrays
  3. Functions
