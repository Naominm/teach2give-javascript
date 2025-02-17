
function greet(name, callback) {

  console.log(`Hello, ${name}`);

  callback();
}

greet("Naomi", () => {
  
  console.log("Nice to meet you");
});