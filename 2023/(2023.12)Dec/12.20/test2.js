function testAdditionProblems() {
  const testCases = [
    {
      lines: ["2", "1 1", "-1 0"],
      expectedOutput: ["2", "-1"],
    },
    // Add more test cases if needed
  ];

  for (let i = 0; i < testCases.length; i++) {
    const { lines, expectedOutput } = testCases[i];
    const output = yourFunctionToSolveTheProblem(lines);
    console.log(`Test Case ${i + 1}:`);
    console.log("Input:");
    console.log(lines.join("\n"));
    console.log("Expected Output:");
    console.log(expectedOutput.join("\n"));
    console.log("Actual Output:");
    console.log(output.join("\n")); // Adjusted this line
    console.log("Test Result:");
    if (arraysEqual(output, expectedOutput)) {
      console.log("Passed\n");
    } else {
      console.log("Failed\n");
    }
  }
}

// Function to solve the addition problems goes here
function yourFunctionToSolveTheProblem(lines) {
  console.log("hello");
  //lines are coming in as an array, other numbers are in an array

  //convert string to nums
  let lineInts = lines.map(Number);

  let leSum = [];

  for (let i = 0; i < lineInts; i++) {
    //loop through the array twice. add the numbers of each array together
    let findSum = lineInts[i];
    for (let j = 0; j < findSum; j++) {
      let total = null;
      total += findSum[j];
      console.log("le total", total);
    }
  }
  console.log("IIIII");
  //add sums to new array, make string,

  // return each w two spaces between ("  ")
}

// Run the test cases
testAdditionProblems();
