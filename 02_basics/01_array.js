console.log("JAI SHREE RAM");
const arr = new Array(0, 1, 2, 3, 4, "sumit", 6)
console.log(arr );

arr.push(6)
// console.log(arr); // value add from last

arr.pop()
// console.log(arr)

arr.pop(0)
console.log(arr); // for value delete at last

arr.unshift(12)
console.log(arr) // starting me value add krta hei

// arr.includes(1)
console.log(arr.includes(1)) // value hei ya nhi check krta hei 

arr.shift(7)
console.log(arr) // sharting ki value ko delete krta hei

console.log(arr.indexOf("sumit")) // find the index of any value

newarr = arr.join()
console.log(newarr) // ek arr ko string me convert krta hei

// slice splice 

// arr.slice(1,3)
console.log(arr.slice(1,3)) // last index = last index -1 and original arr me koi chnage nhi hota hie 
console.log(arr)

console.log(arr.splice(1,3)) // last index = last index and oringainal array me se vaues me se value nikal deta hei 
console.log(arr)

const newarrr = ["kapil", "ravi", "shyam"]
console.log(arr.concat(newarrr))

console.log(...arr, ...newarrr)

//  flat
console.log("flat")
console.log(arr.flat())


