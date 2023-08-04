// represents an indefinite number of paramters (packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));
//can put as many of these as I want

function sum(...numbers) {
  //make sure rest parameters are the last parameters listed
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
