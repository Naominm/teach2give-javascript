# ES6 Modules
introduced a modular system that allows JavaScript code to be split into multiple files, making it easier to manage and reuse code.

# Important Note About ES6 Modules
If you are using ES6 Modules in a browser, you need to add type="module" in the <script> tag, for example:

```html
<script type="module" src="main.js"></script>
```
To use ES6 modules in Node.js:

1. Add "type": "module" in package.json.

3. Use .mjs file extensions.

# Exporting and Importing in ES6 Modules
 you can either use

 - named exports

 - default export

 ## Named Exports
 You can export multiple values from a module using export keyword.

```js
export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  export function multiply(a, b) {
    return a * b;
  }
```

import them in another module using the import keyword.

```js
import { add, subtract, multiply } from "./mathUtils.mjs";
console.log(add(5, 4));
console.log(subtract(5, 4));
console.log(multiply(5, 4));
```

for all local import you must: **precede the file name with ./**

### Using aliases for imports
You can rename imports using the as keyword.

```js
import { add as sum, subtract as difference, multiply } from "./mathUtils.mjs";
console.log(sum(5, 4));
console.log(difference(5, 4));
console.log(multiply(5, 4));
```

### Importing everything (* as an object)

```js
import * as MathUtils from "./mathUtils.mjs";
console.log(MathUtils.add(5, 4));
console.log(MathUtils.subtract(5, 4));
console.log(MathUtils.multiply(5, 4));
```

### Default Exports
Each module can  only have one default export, which can be imported with any name.

```js
export default function log(message) {
  console.log(`Log: ${message}`);
}
```

They do not need curly braces when importing.
```js

import loader from "./loader.mjs";

log("Hello, World");
```