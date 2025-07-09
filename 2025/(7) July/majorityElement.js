class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let occuranceMap = {}
let majorityNum = 0;
let occurances = 0

//we're going through the nums list 
for (let i = 0; i < nums.length; i++ ) {
	let numValue = nums[i]

//checking if the num from nums list is in the hashmap. if not add it with value 1
	if(occuranceMap[numValue] === undefined) {
	occuranceMap[numValue] = 1
	} else {
	//if it is then increase then value by 1
	occuranceMap[numValue] += 1
	}
}


//this is cycling through the hashmap to look at what's in it
for (let key in occuranceMap) {

//this does not need brackets becuase it is the only number we're working with here
	let count = occuranceMap[key];

	if (count > occurances) {
	occurances = count;
	majorityNum = key;

	}
}

console.log(Number(majorityNum));
    }
}

// Example test cases
const sol = new Solution();

console.log(sol.majorityElement([3, 2, 3]));             // Expected: 3
console.log(sol.majorityElement([2, 2, 1, 1, 1, 2, 2])); // Expected: 2
console.log(sol.majorityElement([1]));                  // Expected: 1
