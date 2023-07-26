// -------------------------
//% modulus opperator helps you figure out if a number is even or odd

let students = 21;
let extraStudents = students % 2;

console.log(extraStudents);

// if extra students is 1, that means you have an odd number
// if extra students is 0, that means you have an even number

// -------------------------
// type conversion

//converting a string to a number
let oldAge = "21";
age = Number(oldAge);
age += 1;

//get the datatype of a variable
// will tell you the data type
console.log(typeof age);
// OUTPUT - number

//convert to a string
y = String(3.14);
console.log(y);
// OUTPUT - "3.14"

//convert a boolean
z = Boolean("");
a = Boolean("pizza");

console.log(z);
//OUT PUT - false

console.log(a);
//OUT PUT - true

//helpful in a situation where a user inputs their name and if they skip the step you can use an if statement to see if they typed in their name or not
