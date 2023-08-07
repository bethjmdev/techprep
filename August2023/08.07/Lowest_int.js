// NOT MY CODE

// This is the function definition. It takes one parameter called 'arr', which is an array of integers.
function findSmallestInteger(arr) {
  // Initialize the variable 'smallestInteger' and assign it the value of the first element in the 'arr' array.
  let smallestInteger = arr[0];

  // This is a 'for' loop. It allows us to iterate through the elements of the array.
  // The loop starts with 'i' (a counter) set to 1, as we have already assigned the first element of the array to 'smallestInteger'.
  // The loop continues as long as 'i' is less than the length of the 'arr' array.
  // The 'i++' statement increments 'i' by 1 in each iteration.
  for (let i = 1; i < arr.length; i++) {
    // Inside the loop, we extract the current element from the 'arr' array using the 'i' index.
    const num = arr[i];

    // This is an 'if' statement. It checks whether the current number 'num' is smaller than 'smallestInteger'.
    // If the condition is true (meaning 'num' is smaller), the code inside the curly braces '{ }' will be executed.
    if (num < smallestInteger) {
      // If 'num' is indeed smaller, we update the value of 'smallestInteger' to be equal to 'num'.
      // This step ensures that 'smallestInteger' always contains the smallest number found so far in the array.
      smallestInteger = num;
    }
  }

  // After the loop finishes iterating through the entire array, we return the 'smallestInteger' as the final result.
  return smallestInteger;
}

// Test cases
// The function is called with different arrays as input to verify its correctness.
console.log(findSmallestInteger([34, 15, 88, 2])); // Output: 2
console.log(findSmallestInteger([34, -345, -1, 100])); // Output: -345
