# Abstraction
Abstraction is about hiding implementation details and exposing only the relevant parts to the user.

This helps in reducing complexity by providing a clean and a simple interface.

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

    withdraw(amount){
   if(amount>this.#balance){
    console.log("Try a lower amount that matches your account balance")
    }else{
        this.#balance -=amount
        console.log(
            `The withdrawal of ${amount} is successful. New Balance is ${this.#balance}`
        )
    }
}
}

const account= new BankAccount("John");
account.deposit(800);

account.withdraw(1200); // An error occurs Try a lower amount that matches your account balance
account.withdraw(200);// success
```
**output 1 and 2**
```js
Deposited 800. New Balance: 800
current balance is : 800
The withdrawal of 200 is successful. New Balance is 600
```
