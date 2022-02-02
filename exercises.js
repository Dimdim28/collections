function unique(arr) {
    const set = new Set(arr);
    return Array.from(set.values());
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

  console.log( unique(values) ); 


let map = new Map();
map.set("name", "John");

//let keys = map.keys();
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция

let keys = Array.from(map.keys());
keys.push("more");
console.log(keys);


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean( arr){
const createArray = [];
for(elem of arr){
let sorted = elem.toLowerCase().split("").sort().join("");
console.log(sorted)
createArray.push(sorted);
}
console.log(createArray);
console.log(Array.from(new Set(createArray)))
}

console.log(aclean(arr));