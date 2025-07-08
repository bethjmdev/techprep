// LeetCode-style question:
// First Unique Character in a String

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        
let uniqueChar = {}

s = s.toString('');

//this is to compare the indeces to eachother
let minIndex = Infinity;

//this is to store the result
let result = null;

//here we are looping through the array
for (let i = 0; i < s.length; i++) {
	//we're saying don't look at the index only, look at the char of that index
	let sValue = s[i]

	//check in the uniqueChar hashmap and see if the value exists
	if(uniqueChar[sValue] === undefined) {

	//add the character and make the value 1
	//figure out how to add the  index.... add i as the index??

	uniqueChar[sValue] = [1, i];
	}
	 else {

//if the value already exists add one to the value then I want this process to stop
	uniqueChar[sValue][0] += 1;
	// break;
}

}



//this lets me go through the hashmap and look for a key
for (let key in uniqueChar) {

	//now i need to find the character where the index 1 is 1 and index 2 is the lowest index 2 in the whole hashmap

	//declare that we're calling the first thing int he arrat as count and the second one as index
	let [count, index] = uniqueChar[key];


//if the count ==1 and minIdex is lower than what's in minIndex then follow the code inside 
	if (count === 1 && index < minIndex) {

	//set the min index as the minIndex
	minIndex = index;

	//set result as the index
	result = index;

	}

}

//print the index number that is the value of result
if (result === null) {
	return -1
} else {
	console.log(result);
}








    }
}

// Example test cases
const sol = new Solution();

console.log(sol.firstUniqChar("leetcode"));       // Expected output: 0
console.log(sol.firstUniqChar("loveleetcode"));   // Expected output: 2
console.log(sol.firstUniqChar("aabb"));           // Expected output: -1
