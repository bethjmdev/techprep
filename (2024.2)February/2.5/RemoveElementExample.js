var removeElement = function (nums, val) {
  console.log("----------");
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    // console.log("num[i]", nums[i], "val", val);
    if (nums[i] !== val) {
      console.log("before nums i", nums[i], i);
      nums[j++] = nums[i];
      console.log("after nums i", nums[i], i);
    }
  }
  console.log("----------");
  return j;
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
