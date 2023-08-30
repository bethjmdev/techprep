var isHappy = function () {
  let n = 19;
  // let n = 2;
  let pigPen;
  pigPen = n;
  let iterations = 0;
  let returnVal = true;

  while (pigPen !== 1 && iterations < 10) {
    let holdingPen = Array.from(pigPen.toString());

    let numArray = [];
    for (let i = 0; i < holdingPen.length; i++) {
      numArray.push(Number(holdingPen[i]));
    }

    holdingPen.length = 0;

    //square the numbers
    for (let j = 0; j < numArray.length; j++) {
      holdingPen.push(Math.pow(numArray[j], 2));
    }

    numArray.length = 0;

    //add the numbers together
    let sumOfSquaredValues = 0;

    for (let k = 0; k < holdingPen.length; k++) {
      sumOfSquaredValues += holdingPen[k];
    }
    pigPen = sumOfSquaredValues;
    //repeat

    iterations++;
  }
  console.log("checking pig pen", pigPen);
  // return pigPen == 1;
};

isHappy();
