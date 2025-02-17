# Conditionals
Normally javascript code is executed line by line but we can control the flow using different control structures.

## Conditionals
Conditional statements allows you to execute specific blocks of code based on conditions.


 ### 1.**if statement**
  The if statement execute  only if the condition is true.

  The syntax of if statement:

  ```js
   if(condition){
    // Block of code
   }
   ```
   **Example**
   ```js
   let age=23;

if(age>=18){
    console.log("you are allowe to vote")
}
```

**output**
```js
you are allowe to vote
```

### 2.**if  else statement**
 The if statement can be extended using the if else statement.

 if the specified condition is true the if block gets executed. However if the codition evaluates to false the else block gets executed.

 **syntax**
 ```js
 if(condition){
    //block of code to be executed if  condition is true
 }else{
    //block of code to be executed if condition is false
 }
```

**example**
```js
let age=13;

if(age>=18){
    console.log("you are allowe to vote")
}else{
    console.log("you are pretty young to vote")
}
```
**output**
```js
you are pretty young to vote
```

### 3.**if else lader**
This is used when multiple conditions need to be checked sequentially. if all the conditions in the if block equates to false then the else block gets executed.

**syntax**
```js
if(condition){
    //block of code
}elseif(condition2){
    //block of code
}elseif(condition3){
    //block of code
}else{
    //block of code
}
```

**Example**
```js
//example of if lader
let grade=64;

if(grade==90){
    console.log("Distinction");
}
else if(grade>=70 && grade<=89)
{
    console.log("A");
}
else if(grade>=50 && grade<=69)
{
    console.log("B");
}
else if(grade>=30 && grade<=49)
{
    console.log("C");
}
else if(grade>=20 && grade<=39)
{
    console.log("D");
}
else{
    console.log("Fail");
}
```

**output**
```js
B
```

**Note** You should take care when selecting the logical operator you will be using.
Using or logical operator will lead to a logical error.

Logical errors is when the code is working but producing wrong output.

### 4. **Switch statement**
The switch statement is used when the variable has multiple possible values.

The sitch statement is cleaner than the if lader.
 
 **syntax**
 ```js
 switch(expression){
    case value1:
   //block of code
  break;
  .
  .
  .
  default:

  }
```

**for example**
```js
let grade=56;

switch(true){
   case grade===90:
   console.log("Distintion");
  break;
  case grade>=70 && grade<=89:
    console.log("A");
   break;
   case grade>=50 && grade<=69:
    console.log("B");
   break;
   case grade>=30 && grade<=49:
    console.log("C");
   break;
   case grade>=20 && grade<=39:
    console.log("D");
   break;
 
  default:
    console.log("you have failed")

  }
  ```

  **output**
  ```js
  B
  ```

  ### 5.**Javascripr Ternary operator**
  The Javascript ternary operator syntax includes:
   condition ? statement to be executed if the condition is true : statement to be executed if condition is false false

   **syntax**
   ```js
  condition ? expressionIfTrue : expressionIfFalse
  ```

  **example**
  ```js
  let age=6;

console.log(
    age >= 18 ? "You are old enough to vote" : "You are too young to vote"
  );
  ```

  **output**
  ```js
  You are too young to vote
  ```