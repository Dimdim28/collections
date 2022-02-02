const set = new Set();

const obj1 = {key1: 1};
const obj2 = {key2: 2};
const obj3 = {key3: 3};
set.add(obj1).add(obj2).add(obj3);
console.log(set.size);
console.log(set.has(obj1));
set.add(null).add('Hello').add(3).add(obj1);
console.dir(set);
set.delete(null);
console.log(set.has(null));
console.dir(set);

let set2 = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set2) console.log(value);

// то же самое с forEach:
set2.forEach((value, valueAgain, set) => {
  console.log(value);
});