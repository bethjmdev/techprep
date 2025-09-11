// Club Membership IDs
// {100: "anna", 101: "luke", 102: "anna", 103: "mike"}
// Detect duplicate members.


const membership = {100: "anna", 101: "luke", 102: "anna", 103: "mike"}


let member = new Set()
let dupe = new Set()

for (let person in membership) {
	if (member.has(membership[person])) {
		dupe.add(membership[person]);
	} else {
		member.add(membership[person])
	}
}

console.log(dupe)



// --------------------------------

// Warehouse Shipments
// shipments = [["widget", +10], ["gadget", +5], ["widget", -3], ["gadget", -2]]
// Track net inventory.



const shipments = [["widget", +10], ["gadget", +5], ["widget", -3], ["gadget", -2]];


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


// Question:
// For array [10, 20, 30, 40, 50, 60], list the pairs of numbers the pointers are pointing at while moving inward.

// Example Output:

// (10, 60)
// (20, 50)
// (30, 40)


// const s = [10, 20, 30, 40, 50, 60];

// let left = 0;
// let right = s.length - 1;

// while (left < right) {
// 	console.log(s[left], s[right])

// 	left++
// 	right--
// }

// --------------------------------


// 👉 Goal: While left <= 40 → right stays still.

// When left > 40 → right-- each round.



// Question:
// Given [5, 15, 25, 35, 45, 55, 65], print both values each round.


// left: 5, right: 65 
// left: 15, right: 65 
// left: 25, right: 65 
// left: 35, right: 65 
// left: 45, right: 55 
// left: 55, right: 45 
// left: 65, right: 35

// const s = [5, 15, 25, 35, 45, 55, 65];

// let left = 0;
// let right = s.length - 1;


// while (left < s.length) {
// 	console.log(s[left], s[right])

// 	if (s[left] > 40) {
// 		right--
// 	}

// 	left++


// }


// --------------------------------




// Step 6: Anchor One Pointer, Move the Other

// Goal: Keep the left pointer fixed, move the right pointer through the rest of the array, then move left one over and repeat.

// Question 1:

// Given [1, 2, 3, 4], print the pair of values each round.

// Example Output:

// left: 1, right: 2
// left: 1, right: 3
// left: 1, right: 4
// left: 2, right: 3
// left: 2, right: 4
// left: 3, right: 4


// const s = [1, 2, 3, 4];

// let left = 0;
// let right = left + 1;

// while (left < s.length) {
	
	

// 	while (right < s.length) {
// 		 console.log(s[left], s[right])

// 	 right++

// 	}

// 	left++
// 	right = left + 1
// }

// --------------------------------

