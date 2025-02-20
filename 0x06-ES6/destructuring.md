# Destructuring
Destructuring is a convenient  way to extract values from arrays or objects or objects and assign variables in a single line.

## Destructuring Arrays
```js
const numbers=[1,2,3];

const [first,second,third]=numbers

console.log(first);
console.log(second);
console.log(third);
```

**output**
```js
1
2
3
```
we can skip values when destructuring.

```js
const numbers=[1,2,3];

const [, second, ]=numbers


console.log(second);
```
**output**
```js
2
```

we also use destructuring to swap variables

```js
let a=6, b=7;
[a,b]=[b,a];

console.log(a); // 7
console.log(b); // 6
```

## Destructuring Objects

```js
const person = {
    name: "Naomi",
    age: 24,
};
  
const { name, age } = person;

  console.log(name); // Naomi
  console.log(age); // 24
  ```

  You can also rename variables when destructuring objects:
  ```js
  const person = {
    name: "Naomi",
    age: 24,
};
  
const { name:firstName , age:yearsOld } = person;

  console.log(firstName); // Naomi
  console.log(yearsOld); // 24
  ```

  You can assign default value if the variable doesn't exist in an object:

  ```js
  const person = {
    name: "Naomi",
    age: 24,
};
  
const {
     name:firstName ,
    age:yearsOld,
    major="SE",
} = person;

  console.log(firstName); // Naomi
  console.log(yearsOld); // 24
  console.log(major); //SE

```

We can use the rest operator to gather the remaining properties of an object during destructuring:

```js
const person={
 firstName: "John",
  lastName: "smit",
  dateOfBirth: 2001,
  major: "Computer Science",
  profession: "Web Designer",
};

const { firstName, lastName, ...otherDetails } = person;
console.log(otherDetails);

```
**output**
```js
{
  dateOfBirth: 2001,
  major: 'Computer Science',
  profession: 'Web Designer'
}
```
