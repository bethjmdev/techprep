var plusOne = function () {

  let digits = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]

  let shorterDigits = [];
  let nineCounter = 0;

  for (let i = 0; i < digits.length; i++){
    if(digits[i] === 9){
        nineCounter += 1
    }
  }

  if (nineCounter == digits.length){
    digits.fill(0)
    digits.unshift(1)
    return digits
  }

  if (digits.length > 14) {
    shorterDigits.push(digits.splice(digits.length - 9, 10));

    for (let i = 0; i < shorterDigits.length; i++) {
      if (shorterDigits[0][0] == 0 && shorterDigits[0][1] == 0 && shorterDigits[0][2] == 0){
        digits.push(0, 0, 0);
      } else if (shorterDigits[0][0] == 0 && shorterDigits[0][1] == 0) {
        digits.push(0, 0);
      } else if (
        shorterDigits[0][0] == 0 
      ) {
        digits.push(0);
      }
      console.log("these are digits",digits)
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
