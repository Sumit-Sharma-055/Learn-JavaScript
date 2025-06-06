console.log("JAI SHREE RAM");

// map metjod => unique value ke liye same order
// map and object iteritable nhi hota 

// const map = New Map();
// map.set('in','india')
// map.set('usa', 'america')

// for(const key of Map) {
//     console.log(key);
    
// }



const map = new Map();  // ✅ Correct syntax
map.set('in', 'india');
map.set('usa', 'america');

for (const key of map) {
    console.log(key);
}