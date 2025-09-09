// Sports Practice Attendance
// You are given a list of players attending practices:

// [["sam", "mon"], ["lisa", "mon"], ["sam", "wed"], ["lisa", "thu"], ["tom", "wed"]]

// Use a hashmap to count how many practices each player attended.


const attendance = [["sam", "mon"], ["lisa", "mon"], ["sam", "wed"], ["lisa", "thu"], ["tom", "wed"]]


let count = {}

for (let i = 0; i < attendance.length; i++) {
	let athlete = attendance[i]

	if (count[athlete[0]] === undefined) {
		count[athlete[0]] = 1
	} else {
		count[athlete[0]] += 1
	}

}


console.log(count)

// --------------------------------



// Tool Checkout
// toolsBorrowed = ["hammer", "drill", "hammer", "saw"]
// toolsReturned = ["hammer", "saw"]
// Track how many of each tool are still borrowed.


const toolsBorrowed = ["hammer", "drill", "hammer", "saw"]
const toolsReturned = ["hammer", "saw"]

let borrowed = {}


for (let i = 0; i < toolsBorrowed.length; i++) {
	if (borrowed[toolsBorrowed[i]] === undefined) {
		borrowed[toolsBorrowed[i]] = 1;
	} else {
	borrowed[toolsBorrowed[i]] += 1;
	}
}

for (let i = 0; i < toolsReturned.length; i++) {
	if (borrowed[toolsReturned[i]] != undefined) {
		borrowed[toolsReturned[i]] -= 1;
	}

	if (borrowed[toolsReturned[i]] === 0) {
		delete borrowed[toolsReturned[i]]
	}
}

console.log(borrowed)


// --------------------------------



// Warehouse Shipments
// shipments = [["widget", +10], ["gadget", +5], ["widget", -3], ["gadget", -2]
// Track net inventory.


// const shipments = [["widget", +10], ["gadget", +5], ["widget", -3], ["gadget", -2]]

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