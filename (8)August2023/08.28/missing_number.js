var missingNumber = function () {
  // let nums = [3,0,1];
  // let nums = [0,1];
  // let nums = [9,6,4,2,3,5,7,0,1];
  // let nums = [1];
  let nums = [
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32,
    4, 16, 28, 49, 29, 36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34,
    30, 25, 47, 0, 31, 42, 24, 10, 14,
  ];

  let max = Math.max(...nums);
  let min = Math.min(...nums);

  let countArray = [min];
  let minHold = [];
  let outPut;

  nums = nums.sort((x, y) => {
    return x - y;
  });

  if (nums[0] !== 0) {
    return 0;
  }

  for (let i = min; i < max; i++) {
    countArray.push(countArray[i] + 1);
  }

  console.log("count array is", countArray);

  for (let i = 0; i < countArray.length; i++) {
    console.log("this is nums[i]", nums[i]);

    if (countArray[i] !== nums[i]) {
      minHold.push(countArray[i], nums[i]);
      break;
    }
  }

  console.log("min hold is", minHold);

  if (minHold.length > 0) {
    outPut = Math.min(...minHold);
  } else if (minHold.length == 0) {
    outPut = max + 1;
  }

  console.log(outPut);
};

missingNumber();
