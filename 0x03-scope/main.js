

function myAge() {
let age = 30;// functional scope variable
return age;// i can acess it here inside a funtion
}

// console.log(`i am ${age} years old`); //acessing the variable outside the function will lead to an error theerefore i have commented for it to work

console.log('my age is', myAge());//calling the function to acess the variable