# Loops
Loops enable you to execute a piece of code multiple times.

## Loops in Javascript
1. For Loop
2. While loop
3. do while loop

### 1.For loop
 The For loop is used when the number of iteration is known in advance.

 **Syntax**
 ```js
for
   //when the number is known in advance
    for(initialization, condition, increment){
//code

    }
```

**example**
To print all the even numbers between 2 and 10

```js
for (let i=1; i<=10; i++){ // the for loop
  if(i%2==0){ //an if statement
    console.log(i);
  }
}
```
**output**
```js
2
4
6
8
10
```
### 2. while Loop
The while loop runs as long as tyhe specified condition remains true.

**Syntax**
```js
// while loop
 while(condition){
    //block of code
 }

 ```

 **Example**
 ```js
 let i = 0;

while (i < 5) {
  console.log("The number is " + i);
  i++;
}
```

**output**
```js
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
```

### 3. Do While Loop
The do while loop executes atleast once even if the condition is false.

**Syntax**

```js
do {
  //block of code to execute

} while (condition);
```

**Example**
```js
let i = 0;

do {
  console.log("The number is " + i);
  i++;
} while (i < 5);
```

**Output**
```js
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
```

## The Break and Continue Keyword
These  two are used in loops.

### 1. Break
This keyword terminates the loop whenever a prtticular condition occurs.
The purpose is to terminate a running loop. The loop stops immediately. It terminates the loop completely.

**For Example**
```js 
for (let i=1; i<=10; i++){
  if(i%2==0){
    console.log(i)
    break //This terminates the loop completly
  }
}
```

**Output**
```js
2
```

### 2. Continue
 The continue keyword  it kills the current iteration and js moves to the next iteration.

 ```js
 for (let i=1; i<=10; i++){
  if(i%2==0){
    continue // This will skip the even numbers
  }
  console.log(i)
}
```

**Output**
```js
1
3
5
7
9
```