/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // your code here
};



// ----------------------
// Test cases
// ----------------------
const tests = [
    { nums: [1,3,5,6], target: 5, expected: 2 },
    { nums: [1,3,5,6], target: 2, expected: 1 },
    { nums: [1,3,5,6], target: 7, expected: 4 },
    { nums: [1,3,5,6], target: 0, expected: 0 },
    { nums: [1], target: 0, expected: 0 },
    { nums: [1], target: 2, expected: 1 },
    { nums: [2,4,6,8,10], target: 6, expected: 2 },
    { nums: [2,4,6,8,10], target: 9, expected: 4 },
    { nums: [2,4,6,8,10], target: 1, expected: 0 },
    { nums: [10,20,30,40,50], target: 35, expected: 3 },
    { nums: [10,20,30,40,50], target: 10, expected: 0 },
    { nums: [10,20,30,40,50], target: 55, expected: 5 },
];



// ----------------------
// Test runner
// ----------------------
tests.forEach(({ nums, target, expected }, i) => {
    const result = searchInsert([...nums], target);
    const pass = result === expected;

    console.log(`Test ${i + 1}: nums = [${nums}], target = ${target}`);
    console.log(` result: ${result}`);
    console.log(` expected: ${expected}`);
    console.log(` ✅ ${pass ? "PASS" : "FAIL"}`);
    console.log('--------------------------------');
});
