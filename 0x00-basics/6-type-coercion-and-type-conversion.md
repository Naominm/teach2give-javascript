# Type coercion and type Conversion in Javascript

## Type coercion and Type conversion
-both involve changing from one datatype to another

## Type coercion(implicit conversion)
It leads to unexpected result
Javascript does it.

 **for example**

```js
console.log(5+"5") // this is a type coercion property
// the result is 55 since js has changed the number to a string and concatinated it  thefore 55
```

**output**
```js
55
```

further examples

```js
console.log(5-"3") 
//dosent make sense. the answer is 2 since 3 has been converted for us
console.log(5*"3") // js asks itself if converting 5 to a string makes sense if not it convers to the other and the result is 15
console.log(5*"hello") // returns not a number (NaN)
 ```

 **output**
 ```js
 2
 15
NaN
```

## Type converion
The type conversion is intentionally done by the developer

**for example**

converting to string use:

```js
//converting to a string
string();
//or
toString();
// converting to number
Number(); parseInt(); parseFloat();
//converting to a boolean
Boolean()
```

### Falsy values 
```js
   1. "" // empty string
   2. null
   3. undefined
   4. nan 
   5. false
   6. 0
 ```

### Truthy values
everything else in js is a truthy value.
