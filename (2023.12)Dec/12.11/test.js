function removeSpaces(x) {
  let newX = x.split(" ");
  newX = newX.join("");
  console.log("console", newX);

  return newX;
}

const testCases = [
  "8 j 8   mBliB8g  imjB8B8  jl  B",
  "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd",
  "8aaaaa dddd r     ",
];

// Iterate through test cases and log the results
testCases.forEach((test) => {
  const result = removeSpaces(test);
  console.log(`Input: "${test}" -> Output: "${result}"`);
});
