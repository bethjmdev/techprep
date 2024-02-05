//CXIV (114)
var romanToInt = function (string) {
  //creating a hashmap to equate roman numerals to integer values

  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const strLen = string.length;
  let total = 0;

  // Loop through the letters
  for (let i = 0; i < strLen; i++) {
    //The condition i < strLen - 1 in the code is checking if the current position in the loop is not the last character of the input string. This check is crucial for correctly handling Roman numerals, as Roman numerals use a subtractive notation in certain cases.
    //The code checks if the current letter is followed by one with a higher value (numerals[string[i + 1]] > numerals[string[i]]).
    if (i < strLen - 1 && numerals[string[i + 1]] > numerals[string[i]]) {
      //If this condition is true, it means there is a deduction, and the code subtracts the current letter's numeric value from the total.
      total -= numerals[string[i]];
    } else {
      //If the condition is false, it means there is no deduction, and the code adds the current letter's numeric value to the total.
      total += numerals[string[i]];
    }
  }

  return total;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
