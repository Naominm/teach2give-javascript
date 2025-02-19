# Dom Events
An event in the Dom is an action or occurrence that happens in the browser which the browser can respond to.

Events are triggered by user interactions such as clicks.

# Some popular Dom events
#### on click
Triggered when an element is clicked.

```html
    <button id="btn">click me</button>
```

```js
const btn = document.getElementById("btn");
btn.onclick = function () {
  console.log("Button Clicked");
};
```

**output**
```js
Button Clicked
```
## onmouseover
Triggered when the mouse pointer moves over an element.

## onmouseout
Triggered when the mouse pointer moves out of an element.

## onKeydown
Triggered when a key is pressed down.

Usually called on the document

**example**

document.onkeydown

## onKeyup
Triggered when a key is released.

 **called on the document**

## OnLoad
Triggered when the entire page has finished loading.

it is called on Window.

## on Focus
Triggered when an element gain focus.