var singleNumber = function () {
  let nums = [2, 2, 1];
  // let nums = [4,1,2,1,2]
  // let nums = [1]
  // let nums = [-1,-1,-2]

  nums = nums.sort();

  while (nums.length > 1) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i + 1]) {
        nums.splice(i, 2);
      }
    }
  }

  return nums[0];
};

singleNumber();
