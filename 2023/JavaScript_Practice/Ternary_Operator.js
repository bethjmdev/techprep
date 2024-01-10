// ternary - shortcut for an if/else statement

//     takes 3 operands
//     1. a condition with ?
//     2. Ecpression if True :
//     3. expression if false

// condition ? expIfTrue : exprIfFalse

let adult = checkAge(21);
console.log(adult);

const checkAge = (age) => {
  return age >= 18 ? true : false;
};

//////////////

checkWinner(false);

function checkWinner(win) {
  win ? console.log("you win!") : console.log("you lose!");
}
