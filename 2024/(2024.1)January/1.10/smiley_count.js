// Return the total number of smiling faces in the array
function countSmileys(arr) {
  let total = 0;

  console.log("------------------------");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 3) {
      console.log(arr[i], "greater than 2");
      if (arr[i][0] == ";" || arr[i][0] == ":") {
        if (arr[i][1] == "-" || arr[i][1] == "~") {
          if (arr[i][2] == ")" || arr[i][2] == "D") {
            total += 1;
          }
        }
      }
    } else if (arr[i].length === 2) {
      console.log(arr[i], "2 or less than 2");
      if (arr[i][0] == ";" || arr[i][0] == ":") {
        if (arr[i][1] == ")" || arr[i][1] == "D") {
          total += 1;
        }
      }
    }
  }

  return total;
}
// 2 3 1 0

// Test case 1
console.log(countSmileys([":)", ";(", ";}", ":-D"])); // Expected output: 2

// Test case 2
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // Expected output: 3

// Test case 3
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // Expected output: 1

// Test case 4 (empty array)
console.log(countSmileys([])); // Expected output: 0
