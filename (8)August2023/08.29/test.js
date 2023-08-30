var isHappy = function () {
  let n = "19";
  // let n = 2;

  let newArray = [];
  let newNum;
  let returnNum = [];
  let pigPen = 0;

  do {
    newArray = Array.from(n);
    console.log(newArray);

    for (let i = 0; i < newArray.length; i++) {
      newNum = Number(newArray[i]);
      console.log(typeof newNum, newNum);
      returnNum.push(newNum * newNum);
      console.log(returnNum);

      for (let j = 0; j < returnNum.length; j++) {
        pigPen += returnNum[i];
        break;
      }
    }
    console.log(pigPen);
  } while (pigPen !== 1);
};

isHappy();
