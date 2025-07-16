class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            let compare = nums[i];
        console.log(compare);
            for (let j = i+1; j <nums.length; j++){
        console.log(nums[j]);
            if (compare + nums[j] === target){
            return [i,j];
            } else {
                continue;
                }
            }
        
        }
        
    }
}

// Example test cases
const sol = new Solution();

// console.log(sol.twoSum([2, 7, 11, 15], 9));    // Expected: [0, 1]
console.log(sol.twoSum([3, 2, 4], 6));         // Expected: [1, 2]
// console.log(sol.twoSum([3, 3], 6));            // Expected: [0, 1]