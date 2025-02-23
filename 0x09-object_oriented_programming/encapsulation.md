# Encapsulation
Refers to bundling of properties and methods into a single unit while restricting direct access to some details of the object.

Encapsulation in JavaScript can be achieved using private properties (with the # syntax) and getters/setter methods.

```js
class BankAccount{
    #balance=0;

    constructor(owner){
        this.owner;
    }

    deposit(amount){
        this.#balance+=amount;
        console.log(`Deposited ${amount}. New Balance: ${this.#balance}`)
    }
    checkBalance(){
        console.log(`current balance is : ${this.#balance}`)
    }
}

const account= new BankAccount("John");
account.deposit(800);
account.checkBalance();
```
**output**
```js
Deposited 800. New Balance: 800
current balance is : 800
```

Balance is in private mode meaning it cannot be accessed from outside the class.

deposit() and checkBalance() methods provide controlled access to modify #balance;

checkBalance() safely retrieves the balance without exposing direct access.