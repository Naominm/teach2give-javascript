# Getters and Setters
Getters and Setters are special methods that allow controlled access to an object's properties.

Getters and Setters enable data encapsulation by restricting direct access and enforcing validation.

Getters (get): retrieve a property value.

Setters (set): modifies a property value while allowing validation.

```js
class User {
    constructor(name) {
      this._name = name; 
    }
  
    
    get name() {
      return this._name;
    }
  
   
    set name(newName) {
      if (typeof newName !== "string") {
        console.error("Name must be a string!");
        return;
      }
      this._name = newName;
    }
  }
  
  const user = new User("Jason");
  
 
  console.log(user.name); 
  
  
  user.name = "Dan"; 
  console.log(user.name); 
  
  user.name = 72; //error
  ```

  **output**
  ```js
  Jason
Dan
Name must be a string!
```