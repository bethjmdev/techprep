var twoSum = function (nums, target) {
  //hold a number in a pen
  //sum together pen and other nums in the array
  for (let i = 0; i < nums.length; i++) {
    let holdingPen = nums[i];
    let penIndex = [i];
    for (let j = i + 1; j < nums.length; j++) {
      if (holdingPen + nums[j] === target) {
        return [penIndex, [j]];
      } else if (i === nums.length && j === nums.length) {
        return " ";
      } else {
        continue;
      }
    }
  }
  //if it equlas target, return
  //else add new num to pen
};

console.log(twoSum([3, 2, 4], 6));

console.log(twoSum([2, 7, 11, 15], 9)); // [2, 7] or [7, 2]
// console.log(twoSum([3, 5, 8, 12], 21)); // No solution found
console.log(twoSum([1, 3, 5, 7, 3, 8, 6], 10)); // [3, 7] or [7, 3]
// console.log(twoSum([-2, -7, 11, 15], -9)); // [-2, -7] or [-7, -2]
