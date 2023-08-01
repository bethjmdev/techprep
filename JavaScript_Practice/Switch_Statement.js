// switch statement examines a value for a match against many case clauses
// more effeicient than multiple else/if statment

let grade = "A";

switch (grade) {
  case "A":
    console.log("you did great!");
    break;
  case "B":
    console.log("you did good!");
    break;
  case "C":
    console.log("you did okay!");
    break;
  case "D":
    console.log("you did barely passed!");
    break;
  default:
    //this will display if none of the above match
    console.log("grade is not a letter grade");
}

// let result = 95;

// swtich(true){
//     case result >= 90:
//         console.log("you passed!")
// }
