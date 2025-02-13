# Including Javascript
Javascript is an object oriented programming language. Its the programming language that's mostly used on the web.
## how to include javascript
There are different ways which you can use javascript, namely:

1. Internal javascript
2. External javascript
### Internal javascipt
javascript can be included at the header section of the html document in a scripr tag. 
**Its not a good practice**
for example:
```js
   <script>
        let name="Naomi";
        console.log(name);
    </script>
```
**Its recommended that you use javascript at the end of your body section in your html document**
### External Javascript
An external javascript file is linked to the header section  of a html dociument with a src attribute.
```js
<script src="main.js"></script>
```
### Improving perfomance
To improve perfomance
use **Defer** keyword to ensure that all scripts only loads after all the html is loaded.

#### Alternative is the **Async** keyword
With the **Async** javascript may not obey the order you want when you have a couple of javascript files.

**It is safe to avoid the Async keyword and instead use the Defer keyword**

### Running Javascript Outside of The Browser
Node Js is a powerful tool that allows us to run Javascript outside the browser. Run your js code on Node.

```js
node your-js -filename
```
### Using the let Keyword
