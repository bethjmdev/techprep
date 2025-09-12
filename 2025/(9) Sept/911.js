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



// Question 3:

// Given [10, 20, 30, 40, 50], only log pairs where sum < 60 (just to give a conditional).

// Example Output:

// left: 10, right: 20
// left: 10, right: 30
// left: 10, right: 40
// left: 20, right: 30
// left: 20, right: 40
// left: 30, right: 20   // If using different order



// let s = [10, 20, 30, 40, 50];

// let left = 0;
// let right = left + 1;

// while (left < s.length - 1) {
	


// 	while (right < s.length ) {

// 		if (s[left] + s[right] < 60) {
// 		console.log (s[left], s[right])
// 	}
	
// 		right++
// 	}

// 	left++
// 	right = left + 1

// }



// --------------------------------

  // is this correct? do not show me the code if i got it wrong only give me the english corrections. do not give me the correct answer in english or in code. guide me in english to think about what the right answer might be. do not give me the answer, guide me to think about what the correct answer could be. If my code is technically correct do not bother me about fixing it to be more efficient.



//is the logic correct i dont care about the printing being exactly whats being asked for


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
	
// 	console.log(s + s[left]);
// 	console.log(s + s[right]);

// 	left++
// 	right += 2
// }

// --------------------------------