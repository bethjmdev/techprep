// Input: 
// nums = [3, 7, 10, 15, 20, 25, 30], target = 15
// Output: 3



// const nums = [3, 7, 10, 15, 20, 25, 30]
// const target = 15

// let left = 0
// let right = nums.length - 1;


// let middle;

// while (left <= right) {
// 	middle = Math.floor((left + right) / 2)
// 	midNum = nums[middle];

// 	if (midNum === target) {
// 		return middle
// 	} else if (midNum < target) {
// 		left = middle + 1
// 	} else {
// 		right = middle - 1
// 	}
// }

// return -1

// --------------------------------



// Question:
// You are given a sorted array of integers nums (ascending order) and a target integer.

// Instead of returning the index of the target if it exists, return the index where the target should be inserted to keep the array sorted.

// If the target is already in the array, return its current index.

// Example 1:

// nums = [2, 5, 9, 14, 20], target = 14  
// Output: 3   // target is already at index 3


// Example 2:

// nums = [2, 5, 9, 14, 20], target = 7  
// Output: 2   // 7 should be inserted at index 2


// const nums = [2, 5, 9, 14, 20];
// const target = 7;

// let left = 0
// let right = nums.length - 1
// let middle;

// while (left <= right ) {

// 	middle = Math.floor((left + right) / 2);
// 	midNum = nums[middle]

// 	if (midNum === target) {
// 		return middle;
// 	} else if (midNum < target) {
// 		left = middle + 1;
// 	} else if (midNum > target) {
// 		right = middle - 1;
// 	} 
	
// }


// 	return left


// --------------------------------


// let left = 0;
// let right = nums.length - 1;
// let middle;

// while (left <= right) {
//     middle = Math.floor((left + right) / 2);
//     let midNum = nums[middle];

//     if (midNum === target) {

//         while (nums[middle] === target && middle >= 0) {
//             middle--;
//             console.log("middle", middle);
//             if (middle < 0) break; // prevent out-of-bounds
//         }

//         console.log("middle + 1", middle + 1);
//         return middle + 1;

//     } else if (target < midNum) {
//         right = middle - 1;
//     } else {
//         left = middle + 1;
//     }
// }

// return -1;

// --------------------------------

// let left = 0
// let right = nums.length - 1

// let middle;

// while (left <= right) {
//     middle = Math.floor((left + right) / 2)
//     let midNum = nums[middle]
//     console.log("midNum", midNum);

//     if (midNum === target) {

//         while (nums[middle] === target) {
//             console.log("WHILE LOOP", nums[middle])
//             middle++
      
//         }
        
//         return middle 

//     } else if (midNum < target) {
//         left = middle + 1
//     } else {
//         right = middle - 1
//     }
// }

// return -1