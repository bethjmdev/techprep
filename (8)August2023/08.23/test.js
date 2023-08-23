var merge = function () {
  //this should get rid of the 0's
  let nums1 = [1, 2, 3, 0, 0, 0];
  let nums2 = [7, 4, 5, 6];

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] == 0) {
      nums1.splice(i, 1);
      i -= 1;
    }
  }
  nums1 = nums1.concat(nums2);
  console.log(nums1);

  nums1.sort((x, y) => {
    return y - x;
  });

  console.log(nums1);
};

merge();
