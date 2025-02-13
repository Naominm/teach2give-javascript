# Variables
A variable is a container for storing information. It is a label container that holds a piece of information.

variables store values.

#### **what is a value**?
A value is a piece of data that is stored inside a variable.

## Declaring variables
To declare variables is simply to create variables. 

You can declare variable using the following keywords:

-**Var**

-**Let**

-**const**

### 1. Using the Var keyword
The var keyword was used in old javascript and is not recommended to use in modern javascript. variables declared with this keyword are Functional scoped.

```js
//declaring variables using the var keyword
var firstName="John";
var lastName ="Smith";

console.log(`${firstName} ${lastName}`)
```

**Output**

```js
John Smith
```

###  2.using the Let Keyword
This is the recommended way to declare variables that can change from time to time.

```js
let firstName="John";
let lastName ="Smith";

firstName="Naomi";
lastName="Mbugua";

console.log(`${firstName} ${lastName}`);
```
**output**
```js
Naomi Mbugua
```

### 3. using the const keyword
 This keyword is used for variables that are never meant to change.

 ```js
 const pi =3.142;

pi=2.314;

console.log(pi);
```
**This will throw an error as we are trying to assign a value to a constant variable**
```js
main.js:3 Uncaught TypeError: Assignment to constant variable.
    at main.js:3:3
```

### Initializing a variable
To initialize a variable is to assign a value to a variable.

**For Example**
```js
let name="Joan" // the variable is name and it is assigned a value,"Joan"
let age=30; // 30 is tha value that is assigned to the variable with the name age.
```

**Note that with the const keyword the variables should be initialized immediately**

### Rules in Naming variables
1. variable names can only start with a letter, an underscore or a dollar sign.
2. Must not be a reserved keyword. eg console, date , log , let ,var ,async.
3. Variable name cannot contain a space
4. Variable name are case sensitive 

**make sure to use meaningful and descriptive  name when naming variable**

```js
let x=30;
//instead use a meaningful word
let age=30;
```
**variables are case sensitive**

```js
//All these are different variables
let age=25;
let Age=35;
let agE=56;
 console.log(age,Age, agE);
 ```
 **This is the output**
 ```js
 25 35 56
 ```

 ### Naming Conventions
 1. Camel Casing
 only the first letter of the first word is lowercase. In the succeding words all the first letters of the word are uppercase.
  ```js
 camel casing
 let firstName
```

pascal naming convention all the first letter  of each word is upppercase.
```js
 pascal casing conventions
 used in es6
 let FirstName
```
