console.log("jai shree ram ");
// two types of memory 
// 1. stack => for primitive data types => use a copy fr any changes 
// 2. Heap => for non-premitive datatypes => use ogininal for any changes
//  heap jo hei reference deta hei changes ke lye to sab changes original value me hote hei 
// stack hame copy porovide krta hei to original valuie me chanfgesd nhi hote hei  


 
let Name = "Sumit Sharma";
let newName = Name;
newName = "Pandit ji"
console.log(Name);
console.log(newName);

let user = {
    name : "sumit",
    email : "sumit@gmail.com"
}
let user2 = user;

user.email="sharma@gmail.com"
// console.log(user);

console.log(user);
console.log(user2);