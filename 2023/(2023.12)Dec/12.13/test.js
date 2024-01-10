//to run in treminal type: node test.js
//   return n;

function nextBigger(n) {
  //   console.log("nextBigger being called");
  //something about swithcing the last 2 digits and checking if the number is bigger
  //if not move onto the next 2 digits and repeat
  //repeat until no more digits

  let testArray = [];
  let digit1 = null;

  let newN = Array.from(String(n), Number);
  newN = newN.reverse();

  digit1 = 0;

  testArray = newN.splice(digit1, 2);
  newN = newN.reverse();

  let joinedArray = [...newN, ...testArray];
  joinedArray = parseInt(joinedArray.join(""), 10);

  if (joinedArray > n) {
    // console.log(joinedArray);
    // console.log("n", n);
    return joinedArray;
  } else {
    // console.log("calling roundTwo");
    // console.log("------");
    return roundTwo(n, digit1);
  }
}

const roundTwo = (n, digit1) => {
  // 144
  console.log("roundTWO being called");
  console.log("n", n);
  let newN = Array.from(String(n), Number);
  // [1,4,4]
  // newN = newN.reverse();
  digit1 = 0;

  testArray = newN.splice(digit1, 2);
  console.log("testArray", testArray);
  newN = newN.reverse();
  console.log("newN", newN);

  let joinedArray = [...newN, ...testArray];
  console.log("joined array", joinedArray);
  joinedArray = parseInt(joinedArray.join(""), 10);

  if (joinedArray > n) {
    console.log(n, joinedArray);
    return joinedArray;
  } else {
    console.log("roundTwo: flase", n, joinedArray);
    console.log("------");
    return -1;
  }
};
// Test cases for the function
nextBigger(12);
nextBigger(513);
nextBigger(2017);
nextBigger(414);
nextBigger(144);

// console.log("test case", nextBigger(12));
// // Expected output: 21
// console.log("test case", nextBigger(513));
// // Expected output: 531
// console.log("test case", nextBigger(2017));
// Expected output: 2071
// console.log("test case", nextBigger(9));
// Expected output: -1
// console.log("test case", nextBigger(111));
// Expected output: -1
// console.log("test case", nextBigger(531));
// Expected output: -1
