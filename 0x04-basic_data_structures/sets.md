# Sets
A data structure in Javascript that represent a collection of unique values.

## Properties of Sets

1. Unique elements -They cannot contain duplicate elements.

2. No indexing . They cannot be accessed

3. No order

## Creating a set
To create a set use new Set()

```js
const items=new Set(["nate","jane","bob",4,35,"cat"]);

console.log(items)
```

**output**
```js
Set(6) { 'nate', 'jane', 'bob', 4, 35, 'cat' }
```

## Sets Methods

**add (value)**

Adds a new element with a specified value to the set.

```js
const mySet=new Set ();

mySet.add("leah");
mySet.add("mary");
mySet.add("cat");
mySet.add(55);
mySet.add(true);
mySet.add("a");

console.log(mySet);
```

**output**

```js
Set(6) { 'leah', 'mary', 'cat', 55, true, 'a' }
```

**delete (value)**

Removes a specified element from the set.

```js
//sets

const mySet=new Set ();

mySet.add("leah");
mySet.add("mary");
mySet.add("cat");
mySet.add(55);
mySet.add(true);
mySet.add("a");

console.log(mySet);

//removing items from the set

mySet.delete("cat");
mySet.delete(true);
mySet.delete("a");

console.log(mySet);
```

**output**
```js
Set(6) { 'leah', 'mary', 'cat', 55, true, 'a' }
Set(3) { 'leah', 'mary', 55 }
```

**has (value)**

Returns true if a particular element exist in a set and false otherwise.

```js
//sets

const mySet=new Set (["leah","mary",true,55,"cat"]);

console.log(  mySet.has("cat")); // true
console.log(mySet.has("green"));// false
```

**output**
```js
true
false
```

**Size**

Returns the number of elements in a set.

```js

const mySet=new Set (["leah","mary",true,55,"cat"]);

console.log(mySet.size);
```

**output**
```js
5
```


