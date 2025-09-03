// 9. Package Delivery Tracking
// You get events:

// [("pkg1", "shipped"), ("pkg2", "shipped"), ("pkg1", "delivered")]


// Use a hashmap to track the latest status of each package.
// Expected output: {"pkg1": "delivered", "pkg2": "shipped"}


let packages = [["pkg1", "shipped"], ["pkg2", "shipped"], ["pkg1", "delivered"]]

let state = {};


for (let i = 0; i < packages.length; i++) {

	let mailer = packages[i];

	state[mailer[0]] = mailer[1];
	
}

console.log(state)

// --------------------------------

// 1. Conference Attendees
// You have a list of badge IDs mapped to names:

// {101: "john", 102: "emma", 103: "mike", 104: "emma"}


// Detect if any attendee registered more than once.

// Expected output: ["emma"]


const attend = {101: "john", 102: "emma", 103: "mike", 104: "emma"}


let people = new Set();
let dupes = new Set();


for(let person in attend) {

	if (people.has(attend[person])){
	dupes.add(attend[person])
	} else {
	people.add(attend[person])
	}
}

console.log(dupes)

// --------------------------------


// 8. Chat Message Word Count
// Messages:

// ["hi hi there", "there you are", "hi again"]

// Use a hashmap to count total word frequencies across all messages.

// Expected output: {"hi": 3, "there": 2, "you": 1, "are": 1, "again": 1}





let conversation = ["hi hi there", "there you are", "hi again"]


let count = {};

for (let i = 0; i < conversation.length; i++){
		let sentence = conversation[i].split(" ")


for (let j =0; j < sentence.length; j++) {
	if (count[sentence[j]] === undefined) {
			count[sentence[j]] = 1
		} else {
			count[sentence[j]] += 1
		}
}
		

}

console.log(count)

// --------------------------------

// Contains Duplicate
// Solved 
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false



let nums = [1, 2, 3, 3]

let counts = {};

for (let i = 0; i < nums.length; i++) {
	if (counts[nums[i]] === undefined) {
		counts[nums[i]] = 1
	} else {
	return true
	}

}


	return false

// --------------------------------



// Valid Anagram
// Solved 
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false




const s = "racecar"
const t = "carrace"


let sMap = {}
let tMap = {}


for (let i = 0; i < s.length; i++) {
	if (sMap[s[i]] === undefined) {
		sMap[s[i]] = 1
	} else {
		sMap[s[i]] += 1
	}
}


for (let i = 0; i < t.length; i++) {
	if (tMap[t[i]] === undefined) {
		tMap[t[i]] = 1
	} else {
		tMap[t[i]] += 1
	}
}

for (let chars in sMap) {
	if (tMap[chars] !== sMap[chars]) {
	return false
	}
}

return true