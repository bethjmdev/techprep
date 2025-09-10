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