// go through the array starting with the first int and goign to the last if needed. compare the int you're on to all of the ints after it to the end. if the ints === eachother then return true. if not move onto the next int in the array. if no ints === echother at the end then return false

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    console.log("Input array:", nums);

    for (let i = 0; i < nums.length; i++) {
      console.log("num[IIIIII]", i, "----", nums[i]);

      for (let j = i + 1; j < nums.length; j++) {
        console.log("num[J]", j, "----", nums[j]);

        if (nums[i] === nums[j]) {
          console.log("TRUE");
          return true;
        } else {
          continue;
        }
      }
    }
    console.log("FALSE");
    return false;
  }
}

// Test case
const solution = new Solution();
console.log("Result:", solution.hasDuplicate([1, 2, 3, 3]));
