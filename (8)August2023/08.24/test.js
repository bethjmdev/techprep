var maxProfit = function () {
  //   let prices = [1,2];
  //   let prices = [7, 1, 5, 3, 6, 4];
  //   let prices = [2,1,2,1,0,1,2]
  // let prices = [2,4,1]
  //   let prices = [3, 2, 6, 5, 0, 3];
  // let prices = [2,2,5]
  // let prices = [4,7,2,1]
  let prices = [4, 11, 1, 2, 7];
  // 7 = 4 buy 11 sell
  // 6 =

  let buyOne = prices[0];
  console.log(prices[0]);
  let buyIndexOne;
  let sellOne = 0;

  let buyTwo = prices[0];
  console.log(prices[0]);
  let buyIndexTwo;
  let sellTwo = 0;

  let buyThree = prices[0];
  console.log(prices[0]);
  let buyIndexThree;
  let sellThree = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] <= buyOne) {
      buyOne = prices[i];
      console.log("this is buy", buyOne);
      buyIndexOne = i;
    }
  }

  for (let j = buyIndexOne + 1; j < prices.length; j++) {
    if (prices[j] > sellOne) {
      sellOne = prices[j];
      console.log("this is sell", sellOne);
    }
  }

  //////
  for (let k = 0; k < prices.length - 1; k++) {
    if (prices[k] <= buyTwo && k !== buyIndexOne) {
      buyTwo = prices[k];
      console.log("this is buy", buyTwo);
      buyIndexTwo = k;
    }
  }

  for (let m = buyIndexTwo + 1; m < prices.length; m++) {
    if (prices[m] > sellTwo) {
      sellTwo = prices[m];
      console.log("this is sell", sellTwo);
    }
  }

  for (let n = 0; n < prices.length - 1; n++) {
    if (prices[n] <= buyThree && n !== buyIndexOne) {
      buyThree = prices[n];
      console.log("this is buy", buyThree);
      buyIndexThree = n;
    }
  }

  for (let p = buyIndexThree + 1; p < prices.length; p++) {
    if (prices[p] > sellThree) {
      sellThree = prices[p];
      console.log("this is sell", sellThree);
    }
  }

  if (sellOne - buyOne <= 0 && sellTwo - buyTwo <= 0) {
    console.log(sellOne - buyOne, sellTwo - buyTwo);
    return 0;
  } else if (sellOne - buyOne > sellTwo - buyTwo) {
    console.log("sell and buyONE", sellOne, buyOne);
    console.log("sell and buyTWO", sellTwo, buyTwo);
    console.log("buyONE");
    return sellOne - buyOne;
  } else if (sellTwo - buyTwo > sellOne - buyOne) {
    console.log("buyTWO");
    return sellTwo - buyTwo;
  } else if (sellOne - buyOne == sellTwo - buyTwo) {
    console.log("buyBOTH");
    return sellOne - buyOne;
  } else if (sellThree - buyThree > sellOne - buyOne) {
    console.log("buyTHREE");
    return sellThree - buyThree;
  } else if (sellThree - buyThree > sellThree - buyThree) {
    console.log("buyTHREE");
    return sellThree - buyThree;
  }
};

maxProfit();
