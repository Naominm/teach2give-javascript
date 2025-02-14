# String Concatenation

## string concatenation
This is the joining of two or more strings.

**in old javascript**
```js
const firstName="john";
const lastName="Doe"
//using the + (unary additional operator)
console.log(firstName+" "+lastName);
// we use the empty space to create space between the strings
// the space was used in old js
```

**output**
```js
john Doe
```

### Additional Assignment operator to append strings
```js
let name="naomi";
name+="njeri"
 console.log(name)
 ```

 **output**
 ```js
 naominjeri
 ```
 
### Nowadays we make use of template literals
 ### use of template literals
 use of backtick

 ```js
let firstName="John";
let lastName ='Smith';
let favouriteDish=`pasta`

console.log(`${firstName} ${lastName} ${favouriteDish}`)
```

**output**
```js
John Smith pasta
```
### The template literal is important because
 1. The string can span multiple lines
 2. use ${} to put any variable that has been declared.