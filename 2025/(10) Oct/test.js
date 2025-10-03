/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // implement here

    // console.log("nums", nums)
    let left = 0;
    let right = left + 1;

    // let right = nums.length - 1;

    while (right < nums.length) {
        // console.log("while loop running")

        // console.log("left",nums[left], "index",left,"right", nums[right],"index", right)

        if (nums[left] === nums[right]) {
            // console.log("## if loop running")
            //remove the element
            nums.splice(right, 1);
            // console.log("nums after splice",nums)
            //move right over one, leave left where it is
            // right++
            
        } else {
            // console.log("## ELSE RUNNING")
            //move items over one
            left+=1
            right+=1
        }


    }

// console.log("after",nums)
    return (nums.length)


};

// --- Test cases ---
function test(nums, expectedNums) {
    console.log("____________________________");

    let copy = [...nums];
    let k = removeDuplicates(nums);
    // console.log("Input:", copy);
    console.log("Returned k:",k);
    console.log("Returned k:", k.length);
    console.log("Expected k:", expectedNums.length);
    console.log("Expected nums:", expectedNums);
    console.log("____________________________");
}

test([1,1,2], [1,2]);
test([0,0,1,1,1,2,2,3,3,4], [0,1,2,3,4]);
test([], []);
test([1], [1]);
test([1,1,1,1], [1]);
test([1,2,3], [1,2,3]);
test([2,2,3,3,4,4,5,5,6], [2,3,4,5,6]);
test([1,1,2,3,3,4,5,5,5,6], [1,2,3,4,5,6]);
test([-3,-3,-2,-1,-1,0,0,1,2,2,3], [-3,-2,-1,0,1,2,3]);
test([100,100,101,102,102,103,104,104,105], [100,101,102,103,104,105]);
test([5,5,5,5,5,5,5,5,5], [5]);
test([1,2,2,3,4,4,5,6,7,7,7,8], [1,2,3,4,5,6,7,8]);
test([1,1,2,2,2,3,3,4,4,4,4,5], [1,2,3,4,5]);
