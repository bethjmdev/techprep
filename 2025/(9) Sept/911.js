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