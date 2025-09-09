
// Library Books


// borrowed = ["lotr", "inception", "lotr", "dune"]
// returned = ["lotr", "dune"]


// find out how many books are still out


const borrowed = ["lotr", "inception", "lotr", "dune"]
const returned = ["lotr", "dune"]

let stillOut = {};
let returnedBooks = {};

for (let i = 0; i < borrowed.length; i++) {
	if (stillOut[borrowed[i]] === undefined) {
		stillOut[borrowed[i]] = 1;
	} else {
		stillOut[borrowed[i]] += 1;
	}
}


for (let i = 0; i < returned.length; i++) {
	if (returnedBooks[returned[i]] === undefined) {
		returnedBooks[returned[i]] = 1
	} else {
		returnedBooks[returned[i]] += 1
	}
}


for (let book in stillOut) {
	if (returnedBooks[book]) {
		stillOut[book] -= returnedBooks[book];
	}

	if (stillOut[book] == 0) {
		delete stillOut[book];
	}
}

console.log(stillOut)

// --------------------------------


// Club Membership IDs

// {100: "anna", 101: "luke", 102: "anna", 103: "mike"}

// Detect duplicate members.


const club = {100: "anna", 101: "luke", 102: "anna", 103: "mike"}

let members = new Set();
let dupe = new Set();


for (let person in club) {
	if (members.has(club[person])) {
		dupe.add(club[person])
	} else {
		members.add(club[person])
	}
}

console.log(dupe)

// --------------------------------





// Warehouse Shipments

// shipments = [["widget", +10], ["gadget", +5], ["widget", -3], ["gadget", -2]]


// Track net inventory.



const shipments = [["widget", +10], ["gadget", +5], ["widget", -3], ["gadget", -2]]

let inventory = {};


for (let i = 0; i < shipments.length; i++) {
	let item = shipments[i];

	if (inventory[item[0]] === undefined) {
		inventory[item[0]] = item[1]
	} else {
		inventory[item[0]] += item[1]
	}
}

console.log(inventory)

// --------------------------------


// is this code saying //



// function reverseChars(chars) {

// //set left pointer to 0
//   let left = 0;
//  //set right pointer to the end of the legnth
//   let right = chars.length - 1;

// //while left is less than right
//   while (left < right) {

//   	//character elft and right are here and should now be switched
//     [chars[left], chars[right]] = [chars[right], chars[left]];

//     //move pointer left up one
//     left++;

//     //move pointer right down one
//     right--;
//   }
// }


// let letters = ["a","b","c","d","e"];
// reverseChars(letters);
// console.log(letters); // ["e","d","c","b","a"]

// --------------------------------

// 2. Check if Array is Sorted

// Given an integer array nums, return true if it is sorted in non-decreasing order, otherwise false.
// Use two pointers (one at start, one at end) to compare and narrow down.

// Example
// Input: [1, 2, 2, 3] → true
// Input: [3, 2, 1] → false



// [1, 2, 2, 3]
// [3, 2, 1] 

const fun = (example) => {
	
let left = 0;

let right = left + 1;

while (right < example.length) {
	
	if(example[left] > example[right]) {
	return false
	}


left++;

right++;
}


return true


}


// --------------------------------


// 3. Pair Sum in Sorted Array

// You are given a sorted array of integers nums and a target integer target.

// Return true if there exist two numbers in nums that sum to target.

// Example
// Input: nums = [1,2,3,4,6], target = 6
// Output: true (because 2 + 4 = 6)



const example = [1,2,3,4,6]


for (let i = 0; i < example.length; i++) {
	let left = example[i];

for (let j = i + 1; j < example.length; j++) {
	let right = example[j];

	if (left + right == target) {
	return true
	}

}
	

	}


    // --------------------------------

    