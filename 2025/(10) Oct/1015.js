/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counts = {};
    let half = Math.round(nums.length / 2)

    for (let i = 0; i < nums.length; i++) {
        let val = nums[i]
        if (counts[val] === undefined) {
            counts[val] = 1
        } else {
            counts[val] += 1
        }
    }

    console.log('counts',counts)
    console.log('half',half)

    for (let count in counts) {
        if (counts[count] >= half) {
            return Number(count)
        }
    }
};

// Example tests
console.log(majorityElement([2,2,1,1,1,2,2])); // try with your example
console.log(majorityElement([3,3,4]));         // another example
console.log(majorityElement([1]));             // single element
console.log(majorityElement([2,2]));           // 2