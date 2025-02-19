//objects

const student ={
    firstName:"Naomi",
    lastName:"Smith",
    age:"30",
    major:"software engineering",
}

Object.seal(student)
student.firstName="jane"
student.middleName="Doe" // you cant add, update, or delete as its freezed
console.log(student)

for (let keys in student){
    console.log(keys)
}
// console.log(Object.keys(student))
// console.log(Object.values(student))


// const property={
//     name:"Ane-plaza",
//     location:{
//         country:"Kenya",
//         county:"muranga",
//         location:"kiharu"
//     },
//     type:"Business",
//     Partners:["josh","ann","mary"],
// }
// console.log(student)