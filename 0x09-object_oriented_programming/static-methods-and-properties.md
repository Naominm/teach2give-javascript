# Static Methods and Properties 
They belong to a class itself rather than its instances.
Therefore they can be accessed without creating an object of the class.

## Static Methods
Defined using static keyword inside a class.

```js

class mathUtils{
    static add(a,b){
        return a+b;
    }
    static subtract (a,b){
        return a - b;
    }
}

console.log(mathUtils.add(20,5));
console.log(mathUtils.subtract(20,5));

const math=new mathUtils();
```

**output**
```js
25
15
```

## Static Property
A static property is a variable that belongs to the class rather than an instance.

```js
class Counter{
    static count =0;

    static increment (){
        Counter.count++;
    }
    static getCount(){
        return Counter.count;
    }
}

console.log(Counter.getCount());

Counter.increment();
Counter.increment();
console.log(Counter.getCount());
```
**output**
```js
0
2
```