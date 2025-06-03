console.log("JAI SHREE RAM")

// this 
// this refers the current container 

// const user {
//     name : "sumit",
//     roll : 23,
//     welcome = function(){
//         console.log(`${this.name}, welcome`) /// this is not working because this is not working uin the function it works inn the object
//     }
// }

// const user1 {
//     name: "sumit",
//     age:19,
//     console.log(`welcome, ${this.name}`);
    
// }

//simple
// function hello() {
//     console.log("heloo mr");
    
// }

// hello();
// IIFE 

// (function code(){
//     console.log("sumit");
// })();

// let user = () => {
//     let username = "Narayan";
//     console.log(this);
// }
// user();

const add = (a,b) => {
    return a+b
}
console.log(add(4,5))