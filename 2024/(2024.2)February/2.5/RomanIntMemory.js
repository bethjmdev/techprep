var romanToInt = function (s) {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const sLen = s.length;
  let total = 0;

  //loop through the s string and compare the numbers to the ones before and after
  //if smaller than the number after, subreact from total
  //if larger, add to total

  //looping through the string
  for (let i = 0; i < sLen; i++) {
    //compare it to the numerals to figure out the numeral

    if (i < sLen - 1 && numerals[s[i + 1]] > numerals[s[i]]) {
      total -= numerals[s[i]];
    } else {
      total += numerals[s[i]];
    }
  }

  return total;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
