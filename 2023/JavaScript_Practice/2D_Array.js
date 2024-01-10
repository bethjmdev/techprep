// 2D array - an array of arrays

let fruits = ["pear", "plum", "mango"];
let vegetables = ["broccoli", "radish", "kale"];
let meats = ["eggs", "steak", "fish"];

// to display all of them together

let groceryList = [fruits, vegetables, meats];

for (let i = 0; i <= groceryList.length; i++) {
  console.log(groceryList[i]);
}

// to change something in the array
// changes plum to apple
//find the [column], then the [row]
groceryList[0][1] = "apple";
