let fruits = ["pear", "mango", "plum", "peach"];

fruits = fruits.sort();
// this sorts in alphabetical order

fruits = fruits.sort().reverse();
// this sorts in REVERSE alphabetical order

for (let fruit of fruits) {
  console.log(fruit);
}
