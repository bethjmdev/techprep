

// Step 2: Middle element

// Given an array, practice finding the middle index and the middle element.
// Example: nums = [5, 10, 15, 20, 25] → middle index = 2 → middle element = 15.

// Practice both odd-length and even-length arrays.





// let nums1 = [5, 10, 15, 20, 25]; // odd length
// let middleIndex1 = Math.floor(nums1.length / 2);
// // divides the length of the array by 2 and rounds down


// console.log("Middle index:", middleIndex1);   // 2
// //uses that rounded number to find the index that would be the middle

// console.log("Middle element:", nums1[middleIndex1]); // 15
// //prints the value

// --------------------------------

  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the correct answer in english or in code. guide me in english to think about what the right answer might be. do not give me the answer, guide me to think about what the correct answer could be. If my code is technically correct do not bother me about fixing it to be more efficient.

//is the logic correct i dont care about the printing being exactly whats being asked for


// Step 2: Middle element

// Given an array, practice finding the middle index and the middle element.
// Example: nums = [5, 10, 15, 20, 25] → middle index = 2 → middle element = 15.

// Practice both odd-length and even-length arrays.



// const  nums = [5, 10, 15, 20, 25];

// let middle = Math.floor(nums.length / 2)

// console.log(nums[middle])

// --------------------------------



// 2. Find Upper Middle with Math.ceil
// Given an array of even length, find the upper middle index using Math.ceil, then get the element at that index.
// Example: nums = [1, 3, 5, 7] → middle index = 2 → element = 5.

// const nums = [1, 3, 5, 7]

// let middle = Math.ceil(nums.length / 2)

// console.log(nums[middle])


// --------------------------------


// 4. Max and Min Elements

// Use Math.max and Math.min with the spread operator (...) to find the largest and smallest numbers in the array.
// Example: nums = [12, 5, 8, 20, 3] → max = 20 → min = 3.


// const nums = [12, 5, 8, 20, 3]


// let min = Math.min(...nums)
// let max = Math.max(...nums)

// console.log(min, max)

// --------------------------------

// 5. Difference Between Max and Min
// Find the difference between the maximum and minimum element in the array.


// const nums = [12, 5, 8, 20, 3]


// let min = Math.min(...nums)
// let max = Math.max(...nums)

// console.log(max - min)


// --------------------------------


// 6. Nearest Integer of Average
// Compute the average of all numbers in the array and round it to the nearest integer using Math.round.
// Example: nums = [2, 4, 6, 8] → average = 5 → rounded = 5.


// const nums = [2, 4, 6, 8]
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
// 	let add = nums[i]

// 	sum += add
// }



// Math.round(sum / nums.length)

// --------------------------------

