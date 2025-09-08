
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