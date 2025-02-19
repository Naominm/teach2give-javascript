# Maps
A map is a data structure that is similar to an object.

Maps allows us to store data in key value pairs. 

The keys in **maps** can be of any datatype

## Creating a Map

You can create a  map using the  **new Map ()

## Map Methods

### Set(key,value)

This method adds a key value pair to a map or updates the key value pairs if it already exist in the map

**Example**
```js
//Maps

const myMap= new Map();

myMap.set("fistName","Naomi");
myMap.set("lastName","Mbugua");
myMap.set("age","24");
myMap.set("pet","parrot");

console.log(myMap);
```
**output**

```js
Map(4) {
  'fistName' => 'Naomi',
  'lastName' => 'Mbugua',
  'age' => '24',
  'pet' => 'parrot'
}
```

Updating if the value already exist

```js

const myMap= new Map();

myMap.set("fistName","Naomi");
myMap.set("lastName","Mbugua");
myMap.set("age","24");
myMap.set("pet","parrot");
myMap.set("lastName","Smith") // updates if the value already exist

console.log(myMap);
```

**output**
```js
Map(4) {
  'fistName' => 'Naomi',
  'lastName' => 'Smith',
  'age' => '24',
  'pet' => 'parrot'
}
```

### get Key()

Returns the value associated with a specific key. if there is no such key , returns undefined.

```js
const myMap= new Map();

myMap.set("firstName","Naomi");
myMap.set("lastName","Mbugua");
myMap.set("age","24");
myMap.set("pet","parrot");
myMap.set("lastName","Smith") // updates if the value already exist

console.log(myMap.get("firstName"));
console.log(myMap.get("age"));
console.log(myMap.get("color"));

```

**output**

```js
Naomi
24
undefined
```

### has (key)
Returns true if the map has the specified key, and false if the key does not exist.

```js
const myMap= new Map();

myMap.set("firstName","Naomi");
myMap.set("lastName","Mbugua");
myMap.set("age","24");
myMap.set("pet","parrot");
myMap.set("lastName","Smith") // updates if the value already exist

console.log(myMap.has("firstName"));
console.log(myMap.has("age"));
console.log(myMap.has("color")); // this does not exist
```

**output**
```js
true
true
false
```

### delete(key)
Deletes a specified key value pairs from a map.

```js
const myMap= new Map();

myMap.set("firstName","Naomi");
myMap.set("lastName","Mbugua");
myMap.set("age","24");
myMap.set("pet","parrot");

myMap.delete("firstName");
myMap.delete("age");

console.log(myMap)
```

**output**
```js
Map(2) { 'lastName' => 'Mbugua', 'pet' => 'parrot' }
```

### Clear()
Removes all the key value pairs from a map.

```js
const myMap= new Map();

myMap.set("firstName","Naomi");
myMap.set("lastName","Mbugua");
myMap.set("age","24");
myMap.set("pet","parrot");

myMap.clear();

console.log(myMap)
```

**output**
```js
Map(0) {}
```

### size
Returns the number of key value pairs in a map.|

```js

const myMap= new Map();

myMap.set("firstName","Naomi");
myMap.set("lastName","Mbugua");
myMap.set("age","24");
myMap.set("pet","parrot");


console.log(myMap.size)
```

**output**|
```js
4
```
