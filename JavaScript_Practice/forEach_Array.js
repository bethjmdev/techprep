//Look more into this

// array.forEach()
// executes a provided callback function once for each array element

let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
//passing this function as an argument
students.forEach(print);

function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
  // element of index 0 (index 0 of the word)
  // allows you to access the first letter of each word
}
console.log(students[0]);

function print(element) {
  console.log(element);
}
