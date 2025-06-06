console.log("JAI SHREE RAM");

// some others loops in java Script
// for of loop

// const cars = ["BMW", "Volvo", "Mini"];

// let text = 1;
// for (let xtext of cars) {
//   text += x;
// }

// const fruits = ["apple", "banana", "mango"];

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// // for in loop

// const cars = ["scorpio", "maruti","suzuki"];

// for (const key in cars) {
//   console.log(key);
  
// }

// const student = {
//     name: "Sumit",
//     age: 21,
//     course: "BCA"
// };

// for (let key in student) {
//     console.log(key + " : " + student[key]);
// }

// for each loop
// in array

// const coding = ["sumit", "mant", 18];
// coding.forEach( (val) => {
//     console.log(val);
    
// });

// // in object

// const myobj = [
//     {
//         name : "sumit",
//         age : 18
//     },
//     {
//         name : "shyam",
//         age : 13
//     },
//     {
//         name : "kapil",
//         age : 34
//     }
// ];

// myobj.forEach((item) => {
//     console.log(item);
    
// })



// filter method 

// const mynum = [1,2,3,4,5];
// const res = mynum.filter((num) => num>4);
// console.log(res);


// let myage = [18,45,15,48,49,48,64,48,56,74,63,45,85,63];
// const pal = myage.filter((val) => val >50);
// console.log(pal);

// reduce method

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10