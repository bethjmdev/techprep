
// 1. Favorite Fruits Comparison
// Two friends list their favorite fruits:

// friendA = ["apple", "banana", "mango", "kiwi"]
// friendB = ["banana", "kiwi", "grape", "pear"]


// Use hashmaps to determine:

// Fruits both like

// Fruits only friendA likes

// Fruits only friendB likes


const friendA = ["apple", "banana", "mango", "kiwi"]
const friendB = ["banana", "kiwi", "grape", "pear"]


let mapA = {};
let mapB = {};

let uniqueA = []
let uniqueB = []
let both = []

for (let i = 0; i < friendA.length; i++) {
	if (mapA[friendA[i]] === undefined) {
		mapA[friendA[i]] = 1
	} else {
		mapA[friendA[i]] += 1
	}
}


for (let i = 0; i < friendB.length; i++) {
	if (mapB[friendB[i]] === undefined) {
		mapB[friendB[i]] = 1
	} else {
		mapB[friendB[i]] += 1
	}
}


for (let friend in mapA) {

	if (mapB[friend]) {
		both.push(friend)
	} else {
		uniqueA.push(friend)
	}

}

for (let friend in mapB) {
		if(!mapA[friend]) {
		uniqueB.push(friend)
	}
}


console.log(uniqueA, uniqueB, both)


// ---------------------------------


// 4. Meeting Notes Keywords
// You have an array of notes from a meeting:

// ["discuss project timeline", "project budget discussed", "timeline reviewed"]


// Use a hashmap to count how many times each word appears in the notes.
// Expected output: {"discuss": 1, "project": 2, "timeline": 2, "budget": 1, "discussed": 1, "reviewed": 1}



const notes = ["discuss project timeline", "project budget discussed", "timeline reviewed"]

let repeat = {};


for (let i = 0; i < notes.length; i++) {
	let words = notes[i].split(" ");

	for (let j = 0; j < words.length; j++) {
		if (repeat[words[j]] === undefined) {
			repeat[words[j]] = 1
		} else {
		repeat[words[j]] += 1
		}
	}
}

console.log(repeat)

// ---------------------------------


// 10. Bus Route Capacity Check

// Each trip has events:

// [("stop1", +5), ("stop2", +3), ("stop3", -4), ("stop2", -2)]

// (positive = passengers boarding, negative = leaving).

// Use a hashmap to calculate net passengers per stop.

// Expected output: {"stop1": 5, "stop2": +1, "stop3": -4}



const stops = [["stop1", +5], ["stop2", +3], ["stop3", -4], ["stop2", -2]]

let total = {}

for (let i = 0; i < stops.length; i++) {
	let bus = stops[i];


		if (total[bus[0]] === undefined) {
			total[bus[0]] = bus[1]
		} else {
			total[bus[0]] += bus[1]
		}
	
}


console.log(total)

// ---------------------------------