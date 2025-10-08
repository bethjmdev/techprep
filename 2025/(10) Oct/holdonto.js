// =====================
// Testable Setup
// =====================

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    
    let range = [];

    //in placeholder I'll add the consecutive nums then take the first adn alst, then clear it
    let placeholder = [];

    let left = 0;
    let right = left + 1;


    while (right < nums.length) {
        if (nums[left] + 1 === nums[right]) {
            console.log("IF LOOP")
            console.log("nums[left] + 1 === nums[right]", nums[left] + 1 === nums[right])
            console.log(left)
            consolle.log(right)
            placeholder.push(nums[left]);
            left++
            right++
     
            console.log("placeholder in IF",placeholder)
        } else {
            console.log("----- ELSE LOOP")
            console.log("nums[left] + 1 === nums[right]", nums[left] + 1 === nums[right])
            console.log("left and right",nums[left], nums[right])
            range.push(placeholder[0], "->", placeholder[placeholder.length])
            placeholder = []
            placeholder.push(nums[left])
            left++
            right++
        }


        console.log("placeholder",placeholder)
        console.log("range",range)



    }



};

// =====================
// Test Cases
// =====================

const tests = [
    {
        nums: [0,1,2,4,5,7],
        expected: ["0->2","4->5","7"]
    },
    // {
    //     nums: [0,2,3,4,6,8,9],
    //     expected: ["0","2->4","6","8->9"]
    // },
    // {
    //     nums: [],
    //     expected: []
    // },
    // {
    //     nums: [1],
    //     expected: ["1"]
    // },
    // {
    //     nums: [1,3],
    //     expected: ["1","3"]
    // },
    // {
    //     nums: [0,1,2,3,4,5],
    //     expected: ["0->5"]
    // },
    // {
    //     nums: [-3,-2,-1,0,1,2,50],
    //     expected: ["-3->2","50"]
    // },
    // {
    //     nums: [0,1,3,5,6,7,8,10],
    //     expected: ["0->1","3","5->8","10"]
    // },
];

// =====================
// Run Tests
// =====================

tests.forEach((test, index) => {
    const result = summaryRanges(test.nums);
    const pass = JSON.stringify(result) === JSON.stringify(test.expected);
    console.log(`Test ${index + 1}: nums = [${test.nums.join(",")}]`);
    console.log(`  Result:   ${JSON.stringify(result)}`);
    console.log(`  Expected: ${JSON.stringify(test.expected)}`);
    console.log(`  ✅ ${pass ? "PASS" : "FAIL"}`);
    console.log("--------------------------------");
    console.log("--------------------------------");
    console.log("--------------------------------");
    console.log("--------------------------------");
    console.log("--------------------------------");
    console.log("--------------------------------");

});
