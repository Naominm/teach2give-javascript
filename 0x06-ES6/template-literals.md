# Template Literals
Make working with strings more flexible and readable.

1. Multi-line strings without \n.

2. String interpolation (injecting variables to strings).

3. Embedded expressions.

# String interpolation: Injecting variables into strings

Template literals use `` (backtick)

```js
const name="naomi";
const age=24;

console.log(`my name is ${name} i am ${age} years old`)
```

**output**
```js
my name is naomi i am 24 years old
```

# Multi-line strings (No need for \n)

```js
const multiline=`this is the first line
This is the second line
this is the third line`

console.log(multiline)
```

**output**
```js
this is the first line
This is the second line
this is the third line
```

# Expressions inside template literals

Template literals can evaluate expressions directly inside ${}.

```js

let a =8;
let b=9;

function product(number1, number2){
return number1*number2;
}

console.log( `the sum of ${a} and ${b}  is ${a + b} and the product is ${product(a,b)},`);|
```

**output**

```js
the sum of 8 and 9  is 17 and the product is 72,
```