/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)

            i--
        }

    }

    return nums.length
    //return the length


};



// ----------------------
// Test cases to run below
// ----------------------
const tests = [
    { nums: [3,2,2,3], val: 3, expectedNums: [2,2], expectedK: 2 },
    { nums: [0,1,2,2,3,0,4,2], val: 2, expectedNums: [0,1,3,0,4], expectedK: 5 },
    { nums: [1,1,1,1], val: 1, expectedNums: [], expectedK: 0 },
    { nums: [4,5], val: 4, expectedNums: [5], expectedK: 1 },
    { nums: [], val: 0, expectedNums: [], expectedK: 0 },
    { nums: [2,3,3,2,2,3], val: 2, expectedNums: [3,3,3], expectedK: 3 },
    { nums: [0,0,0,1,2,3,0], val: 0, expectedNums: [1,2,3], expectedK: 3 },
    { nums: [1,2,3,4,5], val: 9, expectedNums: [1,2,3,4,5], expectedK: 5 },
    { nums: [9,9,9,9,9,9], val: 9, expectedNums: [], expectedK: 0 },
    { nums: [5,6,7,8,9], val: 7, expectedNums: [5,6,8,9], expectedK: 4 },
];



// ----------------------
// Test runner
// ----------------------
tests.forEach(({ nums, val, expectedNums, expectedK }, i) => {
    const arrCopy = [...nums];
    const k = removeElement(arrCopy, val);
    const firstK = arrCopy.slice(0, k).sort((a, b) => a - b);
    const expectedSorted = [...expectedNums].sort((a, b) => a - b);

    const pass = (k === expectedK) && 
                 (JSON.stringify(firstK) === JSON.stringify(expectedSorted));

    console.log(`Test ${i + 1}:`);
    console.log(` input: nums = [${nums}], val = ${val}`);
    console.log(` result: k = ${k}, nums = [${arrCopy.join(', ')}]`);
    console.log(` expected: k = ${expectedK}, nums = [${expectedNums.join(', ')}]`);
    console.log(` ✅ ${pass ? "PASS" : "FAIL"}`);
    console.log('--------------------------------');
});



// ----------------------------