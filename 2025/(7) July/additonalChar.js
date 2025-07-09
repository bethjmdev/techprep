class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {character}
     */
    findTheDifference(s, t) {
        
let letterMap = {};

let s = s.split('');
let t = t.split('');

//need t cycle through t and out it in the hashmap
//cycle through s and put it in hashmap

//go through hashmap and see where key === 1;
//print that key


for (let i = 0; i < s.length; i++) {
	let sValue = s[i];

	if (letterMap[sValue] === undefined) {
	letterMap[sValue] = 1
	} else {
	letterMap[sValue] += 1
	}
}

for (let j = 0; j < t.length; j++){
	let tValue = t[j];

	if (letterMap[tValue] === undefined) {
	letterMap[tValue] = 1;
	} else {
	letterMap[tValue] += 1;
	}
}

for (let key in letterMap) {
	let count = letterMap[key];

//this checks if it is an even or odd number.if thereis remaining it is odd, if no remaining it is 0
	if (count % 2 !== 0 ) {
	console.log(key);
	}
	
}
    }
}

// Example test cases
const sol = new Solution();

console.log(sol.findTheDifference("abcd", "abcde")); // Expected: "e"
console.log(sol.findTheDifference("", "y"));         // Expected: "y"
console.log(sol.findTheDifference("a", "aa"));       // Expected: "a"
