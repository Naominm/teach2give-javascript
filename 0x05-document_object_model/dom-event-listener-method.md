# Dom Event Listener Method
The addEventListener() method attaches an event handler to a specified element.

It attaches an event handler without overwriting existing handlers.

The first parameter is the type of event passed in as a string  for instance click, 

The second parameter is the function we want to call when the specified event occurs.

```js
const btn = document.getElementById("btn");
btn.addEventListener =("click", function(){
 console.log("Button Clicked");
});
```