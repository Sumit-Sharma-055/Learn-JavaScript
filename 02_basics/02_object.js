console.log("jai shree ram");
console.log("har har mahadev");
// object in java script 
//  two types to inisilatise the obg
//  1 by singleton
//  2 by literals

//  by literals => => =>
// const myobj = {
//     name : "sumit",
//     email : "sumit@google.com"
// }
// console.log(myobj);
// console.log(typeof(myobj));

// access the obj 

// console.log(myobj.name)
// console.log(myobj["name"])

//  create a symbol as a key par in the obj 

// const mynewobj = {
//     name : "sumit",
//     [ysymbol] : "key",
//     "email" : "symbol@google.com"
// };

// let mynewobj = {
//     name: "sumit",
//     mysymbol: "key",
//     email: "symbol@google.com"
// };

// console.log(mynewobj["mysymbol"]);       // ✅ "key"
// console.log(typeof mynewobj["mysymbol"]); // ✅ "string"


// console.log(mynewobj [ysymbol]);
// console.log(typeof mynewobj[mysymbol]);

// mynewobj.email = "sumit@gmail.com"
// console.log(mynewobj.email)

// mynewobj.name = " kapil"
// console.log(mynewobj.name)
//  console.log(mynewobj)

//   freeez krna kisi bhi object ko

// Object.freeze(mynewobj)

// mynewobj.name = "sumit"
// console.log(mynewobj.name)

let mynewobj = {
    name: "sumit",
    mysymbol: "key",
    email: "symbol@google.com"
};

mynewobj.greetings = function() {
        console.log(`hello mr/mrs ${this["name"]} good morning`)
}

    console.log(mynewobj.greetings())
 console.log("jai shree ram")
 console.log("jai shree ram")

