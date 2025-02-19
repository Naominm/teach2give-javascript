# let and const for block scoped variables
Block scope refers to the scope of a variable within curly braces

Before ES6, JavaScript only had function scopes and global scope which led to issues like variable hoisting.

**Hoisting**
default  behavior of javascript of moving function declaration to the top of the code

Variables declared with let keyword are only accessible within the block they are defined.

Unlike var, let  declaration are not hoisted.

const allows you to declare variables that are block scoped but are read-only. they cannot be changed after assignment.

With const the variables must be initialized immediately.

Let keyword does not necessarily need to be initialized.

**Example of Hoisting brought about by using var keyword**

```js
sayHello()


function sayHello(){
    var name="naomi";
    console.log(name)
}
```

**output**

```js
naomi
```