var maxProfit = function () {
  // let prices = [1,2];
  // let prices = [7, 1, 5, 3, 6, 4];
  // let prices = [2,1,2,1,0,1,2]
  //   let prices = [2,4,1]
  let prices = [3, 2, 6, 5, 0, 3];

  let buy = prices[0];
  console.log(prices[0]);
  let buyIndex;
  let sell = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] <= buy) {
      buy = prices[i];
      console.log("this is buy", buy);
      buyIndex = i;
    }
  }

  for (let j = buyIndex + 1; j < prices.length; j++) {
    if (prices[j] > sell) {
      sell = prices[j];
      console.log("this is sell", sell);
    }
  }

  if (sell - buy > 0) {
    return sell - buy;
  } else {
    return 0;
  }
};

maxProfit();
