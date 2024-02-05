//GPT explpanation
// Define the function twoSum with parameters nums and target
function twoSum(nums, target) {
  // Create an empty object to store numbers and their indices
  const numMap = {};

  // Iterate through the array nums
  for (let i = 0; i < nums.length; i++) {
    // Store each number as a key in the numMap object with its index as the value
    numMap[nums[i]] = i;
  }

  // Iterate through the array nums again
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement needed to reach the target
    const complement = target - nums[i];

    // Check if the complement exists in the numMap and its index is not the same as the current index
    if (numMap.hasOwnProperty(complement) && numMap[complement] !== i) {
      // If true, return the indices of the two numbers whose sum is equal to the target
      return [i, numMap[complement]];
    }
  }
}

//personal interputation
function twoSum(nums, target) {
  //creating the hashmap
  const numMap = {};
  //adding nums to the hashmap
  for (let i = 0; i < nums.length; i++) {
    numMap[nums[i]] = i;
  }

  //going through nums
  for (let i = 0; i < nums.length; i++) {
    //subtracting i from target
    const complement = target - nums[i];

    //then searching through the hashmap to see if there is a number that is equal to complement
    if (numMap.hasOwnProperty(complement) && numMap[complement] !== i) {
      //if yes, sending out the value and the key
      return [i, numMap[complement]];
    }
  }
}
