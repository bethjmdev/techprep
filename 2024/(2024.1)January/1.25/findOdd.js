function findOdd(A) {
  //SORT THE NUMBERS IN ORDER
  //have a counter for the number occurance
  //if i !== [i+1] check if count % 2
  //if no, return i

  const checkNumbers = (num1, num2) => num1 - num2;
  let sortedA = A.sort(checkNumbers);
  //   console.log("SORTED", sortedA);
  let counter = 0;
  //   console.log("COUNTER", counter);

  for (let i = 0; i < sortedA.length; i++) {
    // console.log("COUNTER", counter);

    if (sortedA[i] == sortedA[i + 1]) {
      counter += 1;
      //   console.log(
      //     "FIRST LOOP",
      //     "i",
      //     i,
      //     "sortedA[i]",
      //     sortedA[i],
      //     "counter",
      //     counter
      //   );
    } else if (sortedA[i] !== sortedA[i + 1] && sortedA[i] == sortedA[i - 1]) {
      //   console.log(
      //     "SECOND LOOP",
      //     "i",
      //     i,
      //     "sortedA[i]",
      //     sortedA[i],
      //     "sortedA[i - 1]",
      //     sortedA[i - 1],
      //     "counter",
      //     counter
      //   );

      counter += 1;
      if (counter % 2 !== 0) {
        // console.log("INSDIE THIRD LOOP");
        return sortedA[i];
      } else {
        continue;
      }

      //need to rework this loop
    } else if (sortedA[i] !== sortedA[i + 1] && sortedA[i] !== sortedA[i - 1]) {
      counter += 1;
      //   console.log("THIRD LOOP", sortedA[i]);
      //   console.log("counter", counter);
      if (counter % 2 !== 0) {
        // console.log("INSDIE THIRD LOOP");
        return sortedA[i];
      } else {
        continue;
      }
    }
  }
}

console.log(findOdd([-2, -2, -1, 1, 1, 2, 2, 4, 4, 5, 5])); //-1

console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); //5
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); //4 //displaying correctly
console.log(findOdd([7])); //7 //displaying correctly
console.log(findOdd([1, 2, 2])); //1 //displaying correctly
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1])); //10 //displaying correctly
