# Operators
Operators are symbols that perform operation in operands.

## Operators in Javascript

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Bitwise
6. Ternary
7. Type

### 1.Arithmetic operetors
They perform mathematic operations. eg (+ - * / %)
modulus operator (%)-gives the remainder after dividing operands.
exponetiation (** )
incerment operator (++)
Decrement(--)

```js
let num1 = 5;
let num2= 2;
let sum=num1+num2;
let subtraction=num1-num2;
let multiplication=num1*num2;
let division=num1/num2;
let modulus=num1%num2;
let exponentiation=num1**num2;

console.log("the sum is", sum);
console.log("the subtraction is", subtraction);
console.log("the multiplication is", multiplication);
console.log("the division is", division);
console.log("the modulus is", modulus);
console.log("the exponentiation is", exponentiation);
```
**Output**
```js
the sum is 7
the subtraction is 3
the multiplication is 10
the division is 2.5
the modulus is 1
the exponentiation is 25
```

### Pre incement and post incement

```js
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
```
**Output**
```js
x:4, y:3
 a:4, b:4
```

### Pre decrement and post decrement
works the same way as the increment operator.

```js
let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);


let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
```
**Output**
```js
x:2, y:3
 a:2, b:2
```

### 2. Assignment Operators
The assignment operators in Javascript are(addition, subtraction, multiplication, Division)

```js
//Additional assignment operator
let x=25;
x+=20;
//subtraction assignment operator
x-=20;
console.log(x);
//multiplication assignment operator
x*=20;
console.log(x);
//Division assignment operator
x/=20;
console.log(x);


```
**Output**
```js
25
500
25
```
### 3.Comparison Operator
### Loose equality operator
The loose equality operator perfoms a datatype conversion.

```js
console.log(5==5)// returns true

console.log(5=="5")
//it converts one operand to the other operands datatype therefore returns true
```

**Output**
```js
true
true
```

### strict equality operator
This  operator does perform any datatype conversion. Its introduced in ES6.
```js
console.log(5===5)// returns true

console.log(5==="5")
//it  does not convert datatype it returns false
```

**Output**
```js
true
false
```
### not equal to operator != 
```js

console.log(5 !== 5); // false
// 5 is equal to 5, so `!==` (strict not equal) evaluates to false.

console.log(5 !== '5'); // true
// The strict inequality operator `!==` checks both value and type.
// Since 5 (number) and '5' (string) have different types, it returns true.

// Greater than operator
console.log(5 > 4); // true
// 5 is greater than 4, so this returns true.

// Less than operator
console.log(5 < 4); // false
// 5 is not less than 4, so this returns false.

// Greater than or equal to operator
console.log(5 >= 5); // true
// 5 is equal to 5, so `>=` evaluates to true.

// Less than or equal to operator
console.log(5 <= 4); // false
// This returns false because 5 is not less than or equal to 4.

```

**Output**
```js
false
true
true
false
true
false
```

 ### 4.logical Operators
#### AND(&&)
ONLY IF ALL True.IT RETURNS TRUE.
### OR(||)
IF ANY TRUE IT RETURNS TRUE
### NOT(!)
IT FLIPS THE RESULT

**example**
```js
//  Returns true only if all conditions are true
let age = 25;
let hasID = false;
console.log(age >= 18 && hasID); // true (both conditions are true)

//Returns true if any condition is true
let isWeekend = false;
let isHoliday = true;
console.log(isWeekend || isHoliday); // true (one condition is true)

//Flips the result
let isRaining = true;
console.log(!isRaining); // true (NOT flips false to true)
```
**output**
```js
false
true
true
```
