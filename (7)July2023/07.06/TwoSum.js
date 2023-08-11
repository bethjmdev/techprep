// not my code, asked chat gpt to explain solution to me so I can better understand how to code leetcode q's

// var twoSum = (nums, target) => {  // Declare a function called twoSum that takes an array of numbers (nums) and a target sum.
//     for (let curr = 0; curr < nums.length; curr++) {  // Start a loop that iterates over each element in the nums array.
//         const complement = target - nums[curr];  // Calculate the complement of the current number.

//         for (let next = (curr + 1); next < nums.length; next++) {  // Start a nested loop to iterate over the remaining elements in the nums array.
//             const num = nums[next];  // Get the value of the next element in the array.

//             const isTarget = num === complement;  // Check if the current num is equal to the complement.

//             if (isTarget)  // If the current num is equal to the complement, it means we found a pair that adds up to the target sum.
//                 return [curr, next];  // Return an array containing the indices of the two numbers.
//         }
//     }

//     return [-1, -1];  // If no solution is found, return [-1, -1] to indicate that.
// }
