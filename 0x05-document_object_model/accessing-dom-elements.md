# Accessing Dom elements

To access any html element we access the document object first as it is the owner of all the other object on the page.

## Methods for accessing DOM elements

### **document.getElementById**

Finds an element with an Id equivalent to the element Id.

on the html:
```html
<body>
    <button id="my-button">click me</button>

    <Script>
        const button=document.getElementById("my-button")
        console.log(button)
    </Script>
</body>
```

**console output**
```js
<button id="my-button">click me</button>
```

### document.getElementsByTagName(name)

Finds all the elements that match the specified tag name.

It return a **Node List** of  all those elements that matched the tag name.

Its possible to index a specific element in the Node List just as in arrays.

```html
  <p>Hello gang!</p>
    <p>Am ashley</p>
    <p>you good?</p>
    <p>see ya!</p>
```
```js
 const paragraphs= document.getElementsByTagName("p");
    console.log(paragraphs);
```

**console Output**
```js
HTMLCollection(4) [p, p, p, p]

```

### document.getElementsByClassName(className)
 finds and returns **Node List** of all elements with a class attribute that is similar to the specified class attribute.

 ```html
  <p class="text">Hello gang!</p>
    <p class="text">Am ashley</p>
    <p>you good?</p>
    <p class="text">see ya!</p>
```

```js
  const paragraphs= document.getElementsByClassName("text");
    console.log(paragraphs);
```

 **output**
 ```js
 HTMLCollection(3) [p.text, p.text, p.text]
 ```

 ### document.querySelector(selector)
 Selects the first element in the document that matches the css selector , id or a tag name.

 ```html
 <p class="text">Hello gang!</p>
    <p class="text">Am ashley</p>
    <p>you good?</p>
    <p class="text">see ya!</p>
```
```js
const first_text= document.querySelector(".text");
    console.log(first_text);
```

 **output**
 ```html
 <p class="text">Hello gang!</p>
 ```

 ### document.querySelectorAll(selector)
 Selects all the elements in the document that match a specified tag , Id , or tag name.

 It returns a node list of  all those elements.

 ```html
  <p class="text">Hello gang!</p>
    <p class="text">Am ashley</p>
    <p>you good?</p>
    <p class="text">see ya!</p>
```

```js
const first_text= document.querySelectorAll(".text");
    console.log(first_text);
```

 **output**
 ```js
 
NodeList(3) [p.text, p.text, p.text]
0
: 
p.text
1
: 
p.text
2
: 
p.text
length
: 
3
```