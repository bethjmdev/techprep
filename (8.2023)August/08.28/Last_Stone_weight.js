var lastStoneWeight = function () {
  // const stones = [2,7,4,1,8,1];
  let stones = [2, 2];
  //   let stones = [1];

  while (stones.length > 1) {
    stones.sort((x, y) => {
      return y - x;
    });

    let maxOne = stones[0];
    let maxTwo = stones[1];

    if (maxOne !== maxTwo) {
      stones.shift();
      stones.shift();
      stones.push(maxOne - maxTwo);
    } else if (maxOne == maxTwo && stones.length == 2) {
      return maxOne - maxTwo;
    } else {
      stones.shift();
      stones.shift();
    }
  }
  return stones[0];
};

lastStoneWeight();
