// array.filter()
//creates a new array with all elements that pass the test provided by a function

let ages = [18, 16, 21, 19, 70, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element) {
  return element >= 18;
}

function print(element) {
  console.log(element);
}

///////////

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
