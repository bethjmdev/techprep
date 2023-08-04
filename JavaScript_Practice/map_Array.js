// Array.map()
// executes a provided callback function once for each array element AND creates a new array

let numbers = [1, 2, 3, 4, 5, 6];
let squares = numbers.map(square);

squares.forEach(print);

function square(element) {
  return Math.pow(element, 2);
}

function print(element) {
  console.log(element);
}
