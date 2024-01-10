"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'aPlusB' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY transactions as parameter.
 */

function aPlusB(lines) {
  //lines are coming in as an array, other numbers are in an array

  //convert string to nums
  let lineInts = lines.map(Number);

  let leSum = [];

  for (let i = 1; i < lineInts.length; i++) {
    //loop through the array twice. add the numbers of each array together
    let findSum = lineInts[i];
    let total = null;
    for (let j = 0; j < findSum.length; j++) {
      total += findSum[j];
      //add sums to new array,
      leSum.push([total]);
    }
  }
  //make string

  leSum = leSum.toString().join("  ");

  // return each w two spaces between ("  ")

  return leSum;
}

function main() {
  const ws = process.stdout;

  const linesCount = parseInt(readLine().trim(), 10);

  let lines = [];

  for (let i = 0; i < linesCount; i++) {
    const line = readLine();
    lines.push(line);
  }

  const result = aPlusB(lines);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
