// You are given a sorted array of distinct integers nums and a target integer.

// Return the index of the target if it exists, otherwise return -1.

// Example:

// nums = [1, 3, 5, 7, 9], target = 5

// Output: 2   // 5 is at index 2

// nums = [1, 3, 5, 7, 9], target = 6
// Output: -1  // 6 is not in the array


// let left = 0
// let right = nums.length - 1
// let middle;

// while (left <= right ) {
	
// 	middle = Math.floor((left + right) / 2);
// 	let midNum = nums[middle]

	
// 	if (target === midNum) {
// 	return middle
// 	}
// 	else if (midNum < target) {
// 		left = middle + 1
// 	} else {
// 		right = middle - 1
// 	}

// }

// return -1

// --------------------------------

// You are given a sorted array of distinct integers nums and a target integer.
// Return the index where the target should be inserted in order to keep the array sorted.
// If the target already exists, return its index.


// nums = [1, 3, 5, 7, 9], target = 6
// Output: 3   // 6 should go between 5 and 7, at index 3



// let left = 0
// let right = nums.length - 1;
// let middle;

// while (left <= right) {
	
// 	middle = Math.floor((left+right) / 2)
// 	let midNum = nums[middle]

// 	if (target === midNum) {
// 	return middle
// 	} else if (midNum < target) {
// 		left = middle + 1
// 	} else {
// 		right = middle - 1
// 	}
// }


// return left 

// --------------------------------



// Sports Practice Attendance
// You are given a list of players attending practices:

// [["sam", "mon"], ["lisa", "mon"], ["sam", "wed"], ["lisa", "thu"], ["tom", "wed"]]

// Use a hashmap to count how many practices each player attended.



// const attend = [["sam", "mon"], ["lisa", "mon"], ["sam", "wed"], ["lisa", "thu"], ["tom", "wed"]]


// let players = {}

// for (let i = 0; i < attend.length; i++) {

// 	let person = attend[i]

		
// 		if (players[person[0]] === undefined) {
// 			players[person[0]] = 1
// 		} else {
// 			players[person[0]] += 1
// 		}
// }

// return players

// --------------------------------