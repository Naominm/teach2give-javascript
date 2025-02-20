

const person={
 firstName: "John",
  lastName: "smit",
  dateOfBirth: 2001,
  major: "Computer Science",
  profession: "Web Designer",
};

const { firstName, lastName, ...otherDetails } = person;
console.log(otherDetails);








// const person = {
//     name: "Naomi",
//     age: 24,
// };
  
// const {
//      name:firstName ,
//     age:yearsOld,
//     major="SE",
// } = person;

//   console.log(firstName); // Naomi
//   console.log(yearsOld); // 24
//   console.log(major); //SE




// // let a=6, b=7;
// // [a,b]=[b,a];

// // console.log(a); // 7
// // console.log(b); // 6





// // const numbers=[1,2,3];

// // const [, second, ]=numbers


// // console.log(second);
