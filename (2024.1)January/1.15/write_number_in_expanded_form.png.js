function expandedForm(num) {
  let output = [];

  let numString = num.toString();

  //this is looping through the number
  for (let i = 0; i < numString.length; i++) {
    //this is taking the number we're focuing on and adding it to the array
    if (numString[i] == 0) {
      continue;
    } else {
      let newNum = [numString[i]];
      // console.log(newNum, "hi");

      //this is adding zero's based on this equation num.length - (i +1)
      //something is going wrong here
      let zeroCount = numString.length - (i + 1);

      console.log("zero count", numString.length);
      for (let j = 0; j < zeroCount; j++) {
        newNum.push(0);
      }
      //this adds them to the output
      output.push(newNum.join(""));

      //how to get rid of the groups of 0's
    }
  }

  return output.join(" + ");
}

// Test cases
console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'
