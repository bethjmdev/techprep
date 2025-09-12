// Fast/Slow Pointers

// Goal: Move one pointer 1 step at a time (slow) and the other 2 steps at a time (fast). Log positions or values each round.

// Question:
// Given the array [1, 2, 3, 4, 5, 6, 7], move two pointers (slow and fast). Stop when fast reaches or passes the end of the array. Log the indices and values each round.

// Example Output:

// slow index: 0, value: 1; fast index: 0, value: 1
// slow index: 1, value: 2; fast index: 2, value: 3
// slow index: 2, value: 3; fast index: 4, value: 5
// slow index: 3, value: 4; fast index: 6, value: 7


// const s = [1, 2, 3, 4, 5, 6, 7];

// let left = 0;
// let right = 0;

// while (right < s.length) {
// 	console.log(s[left], s[right]);

// 	left++
// 	right += 2
// }

// --------------------------------


// Question 2:
// Given [2, 5, 3, 8, 1], move left pointer only if value < 5; move right pointer each round. Log indices and values.


// const s = [2, 5, 3, 8, 1];

// let left = 0
// let right = 0;

// while (right < s.length) {
// 	console.log(s[left], s[right]);

// 	right++

// 	if (s[left] < 5) {
// 		left++
// 	}
// }