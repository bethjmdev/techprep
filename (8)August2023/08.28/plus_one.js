var plusOne = function () {
  // let digits = [1,2,3];
  // let digits = [4,3,2,1];
  // let digits = [9];
  // let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
  //   let digits = [8, 2, 0, 4, 5, 3, 6, 5, 1, 2, 2, 1, 2, 0, 0, 3, 6, 5, 7, 1, 9];
  let digits = [
    7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4,
    7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 7,
  ];

  let shorterDigits = [];

  if (digits.length > 14) {
    shorterDigits.push(digits.splice(digits.length - 9, 10));
    console.log("puuush", shorterDigits[0]);

    for (let i = 0; i < shorterDigits.length; i++) {
      if (shorterDigits[0][0] == 0) {
        digits.push(0);
      } else if (shorterDigits[0][0] == 0 && shorterDigits[0][1] == 0) {
        console.log("added 2 zeros");
        digits.push(0, 0);
      } else if (
        shorterDigits[0][0] == 0 &&
        shorterDigits[0][1] == 0 &&
        shorterDigits[0][2]
      ) {
        digits.push(0, 0, 0);
      }
    }

    shorterDigits = shorterDigits[0].join("");
    console.log("joined", shorterDigits);

    shorterDigits = parseInt(shorterDigits);
    console.log("parse int", shorterDigits);

    shorterDigits += 1;

    shorterDigits = String(shorterDigits).split("").map(Number);

    let returnArray = digits.concat(shorterDigits);

    return returnArray;
  }

  digits = digits.join("");
  digits = parseInt(digits);
  digits += 1;
  let returnArray = digits.toString().split("");
  return returnArray;
};

plusOne();

// && shorterDigits[i] < shorterDigits[i + 1]
