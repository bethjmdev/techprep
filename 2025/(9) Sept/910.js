// Tool Checkout

// toolsBorrowed = ["hammer", "drill", "hammer", "saw"]

// toolsReturned = ["hammer", "saw"]

// Track how many of each tool are still borrowed.

// -----

const toolsBorrowed = ["hammer", "drill", "hammer", "saw"]

const toolsReturned = ["hammer", "saw"]

let remaining = {};


for (let i = 0; i < toolsBorrowed.length; i++) {
	if (remaining[toolsBorrowed[i]] === undefined) {
		remaining[toolsBorrowed[i]] = 1
	} else {
	remaining[toolsBorrowed[i]] += 1
	}
}

for (let i = 0; i < toolsReturned.length; i++) {
	if (remaining[toolsReturned[i]]) {
		remaining[toolsReturned[i]] -= 1
	}

	if (remaining[toolsReturned[i]] === 0) {
		delete remaining[toolsReturned[i]]
	}
}

console.log(remaining)

// --------------------------------

// 👉 Goal: Just move two pointers toward each other and observe their positions.

// Question:

// Given an array ["a","b","c","d","e"], print the positions of left and right as they move toward each other.

// End when left >= right.

// Example Output (just positions):

// left=0, right=4
// left=1, right=3
// left=2, right=2


// const s = ["a","b","c","d","e"]

// let left = 0;
// let right = s.length - 1;

// while (left <= right) {
	
// 	console.log(left)
// 	console.log(right)

// 	left++
// 	right--

// }



// --------------------------------

// 👉 Goal: Just move two pointers toward each other and observe their positions.


// Question:
// For array [10, 20, 30, 40, 50, 60], list the pairs of numbers the pointers are pointing at while moving inward.

// Example Output:

// 10, 60
// 20, 50
// 30, 40


// const t = [10, 20, 30, 40, 50, 60];


// let left = 0;
// let right = t.length -1;

// while (left < right) {
//    console.log(t[left] + "," + t[right])


//    left++
//    right--
// }

// --------------------------------


// 👉 Goal: Just move two pointers toward each other and observe their positions.


// Question:
// Given string array ["x","y","z","q"], show the indices of left and right each round.


// Example Output:
// left=0, right=3
// left=1, right=2


// -------


// const s = ["x","y","z","q"]

// let left = 0;
// let right = s.length -1;

// while (left < right) {
// 	console.log("left =" + left)
// 	console.log("right =" + right)

// 	left++
// 	right--
// }

// --------------------------------

// Step 2: Move One Pointer Conditionally

// 👉 Goal: Move only the left pointer until it reaches a value greater than 3.



// Question:
// Given [1, 2, 3, 4, 5, 6], move a left pointer and print its index and value each round until you reach a value > 3.



// Example Output:

// left index: 0, value: 1
// left index: 1, value: 2
// left index: 2, value: 3


// let s = [1, 2, 3, 4, 5, 6];

// let left = 0;

// while (s[left] <= 3) {
// 	console.log("index" + left + "value" + s[left])

// 	left++
// }

// --------------------------------



// Step 3: Move Two Pointers, Right Only if Even


// 👉 Goal: 

// Move left one step every round, 

// move right only if it points at an even number.


// Question:
// Given [5, 8, 12, 7, 4], print left and right values each round.

// Example Output:

// left: 5, right: 4
// left: 8, right: 4
// left: 12, right: 4
// left: 7, right: 4


// const s = [5, 8, 12, 7, 4]

// left = 0;
// right = s.length - 1;


// while (left < s.length) {
// 	console.log(s[left])
// 	console.log(s[right])

// 	if (s[right] % 2 === 0) {
// 		right--
// 	}

// 	left++
// }


// --------------------------------



// Step 4: Cross Pointers with Different Steps

// 👉 Goal: Move left by 2 and 
// right by 1 each round until they cross.

// Question:
// Given [10, 20, 30, 40, 50, 60, 70], 

// print the values the pointers are pointing at each round.

// Example Output:

// left: 10, right: 70
// left: 30, right: 60
// left: 50, right: 50

// const s = [10, 20, 30, 40, 50, 60, 70];

// let left = 0;
// let right = s.length - 1;

// while (left < right) {
// 	console.log(s[left], s[right])

// 	left+=2
// 	right--
// }


// --------------------------------



// Step 5: Stop Only One Pointer


// 👉 Goal: While left <= 40 → right stays still.

// When left > 40 → right-- each round.



// Question:
// Given [5, 15, 25, 35, 45, 55, 65], print both values each round.


// left: 5, right: 65
// left: 15, right: 65
// left: 25, right: 65
// left: 35, right: 65
// left: 45, right: 65
// left: 55, right: 65
// left: 65, right: 65



// const s = [5, 15, 25, 35, 45, 55, 65]

// left = 0;
// right = s.length - 1;

// while (left < s.length) {
	
// 	console.log(s[left], s[right])

// 	if (s[left] > 40) {
// 	right--
// 	}

// 	left++

// }