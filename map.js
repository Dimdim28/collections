let map = new Map();
map.set("Sergey", "China");
map.set(1, 14).set(true, false).set(NaN, "nan");
console.dir(map);
console.log(map.size);

//check element in map
console.log(map.get(1));
console.log(map.get(2));
console.log(map.get(true));
console.log(map.get(false));
console.log(map.get(NaN));
console.log(map.has(1));
console.log(map.has(2));

//delete from map
map.delete(1);
map.delete(true);
console.log(map.get(1));
console.log(map.get(true));
console.log(map.has(1));
console.log(map.has(true));
console.log(map.size);
map.clear();
console.dir(map);

//object could be also in map as value
map.set("obj", { 1: "Hello", 2: "HI" });
console.log(map.has("obj"));
console.log(map.has(1));
console.log(map.has(2));
console.dir(map);

//ans as key
const object = { 24432: 24432 };
map.set(object, 1);
console.log(map.get(object));
console.dir(map);

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50],
]);

// перебор по ключам
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}
console.log("=============");
for (const entry of recipeMap.entries()) {
  console.log(entry);
}

recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // огурец: 500 и так далее
});

let obj = {
  name: "John",
  age: 30,
};

let objmap = new Map(Object.entries(obj));
console.log(objmap);

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// prices = { banana: 1, orange: 2, meat: 4 }
console.dir(prices);
console.log(prices.orange); // 2

let map2 = new Map();
map2.set("banana", 1);
map2.set("orange", 2);
map2.set("meat", 4);

let obj2 = Object.fromEntries(map2.entries()); // создаём обычный объект (*)

// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj2.orange); // 2
