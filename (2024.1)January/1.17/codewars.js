var twoSum = function (nums, target) {
  //hold a number in a pen
  //sum together pen and other nums in the array
  for (let i = 0; i < nums.length; i++) {
    let holdingPen = [];
    holdingPen.push(nums[i]);
  }
  //if it equlas target, return
  //else add new num to pen
};

console.log(twoSum([2, 7, 11, 15], 9)); // [2, 7] or [7, 2]
console.log(twoSum([3, 5, 8, 12], 21)); // No solution found
console.log(twoSum([1, 3, 5, 7, 3, 8, 6], 10)); // [3, 7] or [7, 3]
console.log(twoSum([-2, -7, 11, 15], -9)); // [-2, -7] or [-7, -2]
