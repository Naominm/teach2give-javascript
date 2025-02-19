# Changing DON elements
You can change the content attributes and stylings of DOM  elements.

# Changing the content of HTML elements

### **innerHTML**
 Sets/ gets html content of an element.

 **example**
 ```html
 <div id="my-div">
    <h1>Hello coders</h1>
    <p>php sucks</p>
</div>
```
```js
  const div=document.getElementById("my-div")
    console.log(div.innerHTML) // accessing
    div.innerHTML=`<h1>new content here</h1>`
    console.log(div.innerHTML)
   ```

 **output**
 ```js
  <h1>Hello coders</h1>
    <p>php sucks</p>

index.html:17 <h1>new content here</h1>
```

### innerText
sets or gets the text content of an element not preserving the HTML tags.

```html
<div id="my-div">
    <h1>Hello coders</h1>
    <p>php sucks</p>
</div>
```

```js
    const div=document.getElementById("my-div")
    console.log(div.innerText) // accessing
    div.innerHTML=`new content here`
    console.log(div.innerText)
```
***output**
```js
Hello coders

php sucks
index.html:17 new content here
```

### text Content
Sets or gets the text content of an element and its descendants without preserving the HTML tags.

its more consistent across browsers unlike innerText.

## Changing the attribute of HTML elements.
We can use element.attribute= value
```html
 <h1 class="heading" id="heading">Hello coders</h1>
 ```

 ```js
   const heading=document.getElementById("heading")
   heading.id="My-heading";
   console.log(heading)
```

**output**
```html

<h1 class="heading" id="My-heading">Hello coders</h1>
```

We can also use element.setAttribute("attribute", "value")

```html
 <h1 class="heading" id="heading">Hello coders</h1>
 ```

 ```js
 const heading=document.getElementById("heading")
heading.id="My-heading";
heading.setAttribute("id", "awesome-phrase");
console.log(heading)
```

**output**
```html
<h1 class="heading" id="awesome-phrase">Hello coders</h1>
```

## Changing the styling of HTML elements
element.style.property="value"

**Its important to input the value in double quotes even if its a number**

```html
<h1 class="heading" id="heading">Hello coders</h1>
```

```js
const heading=document.getElementById("heading")
heading.style.border="2px solid green"
heading.style.borderRadius="10px"
```

### Changing styling in JavaScript using CSS classes
**element.classList.add ( ):** adds one or more class names to an element without removing the existing classes.

**element.classList.remove ( ):** removes one or more classes from an element.

**element.classList.toggle ( ):** toggles the specified class, it is present, it is removed, if it is absent, it is added.

**element.classList.contains ( ):** returns true if an element contains the specified class(es), false otherwise.

**element.classList.replace ( ):** replaces an existing class with a new class.

**element.style.setProperty ( ):** sets a CSS property on an element (first parameter) and its value (second parameter).