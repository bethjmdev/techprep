//   // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the correct answer in english or in code. guide me in english to think about what the right answer might be. do not give me the answer, guide me to think about what the correct answer could be. If my code is technically correct do not bother me about fixing it to be more efficient.

// //is the logic correct i dont care about the printing being exactly whats being asked for



// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// //loop through the array
// //check if the current value == target with anything in the hashmap
// //if no, then store it
// //if yes, then print it

// let sum = {};

// //looping through array
// for (let i = 0; i < nums.length; i++) {
	
// 	//what number do i need to equal target with nums[i]?
// 	let need = target - nums[i];

// 	if (sum[need] !== undefined) {
// 		return [sum[need], i ]
// 	} 


// 	//now i need to store the value
// 	if (sum[nums[i]] === undefined) {
// 		sum[nums[i]] = i
// 	}
// }

// --------------------------------


// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     let dupe = new Set();
//     let unique = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         if (unique.has(nums[i])) {
//             dupe.add(nums[i])
//         } else {
//             unique.add(nums[i])
//         }
//     }

//     if (dupe.size > 0) {
//         return true
//     } else {
//         return false
//     }
// };

// --------------------------------



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//     let n = nums.length / 2;
//     let map = {};

//     for (let i = 0; i < nums.length; i++) {
//         let number = nums[i]
//         if (map[number] === undefined){
//             map[number] = 1
//         } else {
//             map[number] += 1
//         }
//     }

//     //need to find out what value in total > n

//     for (let total in map) {
//         if (map[total] >= n) {
//             return Number(total);
//         }
//     }
// };