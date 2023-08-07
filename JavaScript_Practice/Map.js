// map
// object that olds key value pairs of any data type

const store = new Map([
  ["tshirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50],
]);

store.set("hat", 40);
//adds hat to the list
store.delete("hat");
//deletes hats from the list

console.log(store.has("hats"));
//returns boolean, tells you if the value exists

console.log(store.size);
//tell how many are in the Map

shoppingCart += store.get("tshirt");
console.log(shoppingCart);

store.forEach((value, key) => console.log(`${key}, $${value}`));
