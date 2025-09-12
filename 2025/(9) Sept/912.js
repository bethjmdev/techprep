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

// --------------------------------




// Step 10: Circular / Wrap-Around Pointers

// Goal: Treat the array as circular.

// Question:
// Given [1, 2, 3, 4, 5], move left pointer forward +1 each round, wrapping to 0 after reaching the end. Move right pointer backward -1 each round, wrapping to the last index after reaching 0. Log indices and values. Stop after 7 rounds.

// Example Output:

// left: 0, right: 4
// left: 1, right: 3
// left: 2, right: 2
// left: 3, right: 1
// left: 4, right: 0
// left: 0, right: 4
// left: 1, right: 3


// const s = [1, 2, 3, 4, 5];

// let count = 0;

// let left = 0;
// let right = s.length - 1;


// while (count < 7) {
	

// 	console.log(left,right)
// 		left ++
// 		right--

	
// 	if (left === s.length) {
// 	left = 0
// 	}

// 	if (right < 0) {
// 	right = s.length - 1
// 	}

// 	count++
// }

// --------------------------------


// Step 11: Searching / Scanning Pointers

// Goal: Scan until a condition is met.

// Question 1:
// Given [2, 4, 6, 8, 10], move a pointer from start until you reach a value > 6. Log index and value each step.

// Example Output:

// index: 0, value: 2
// index: 1, value: 4
// index: 2, value: 6
// index: 3, value: 8



// const s = [2, 4, 6, 8, 10];
// let left = 0;


// while (s[left] < 7) {
// 	console.log(left, s[left])
// 	left++
// }

// --------------------------------


