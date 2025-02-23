
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


// class User {
//     constructor(name, age) {
//         this.name=name;
//         this.age=age;
//     }
//     greet(){
//         console.log(`Hello my name is ${this.name}`);
//     }
// }

// const person1=new User("Will smith",30);
// person1.greet();
