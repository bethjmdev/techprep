// video
// https://www.youtube.com/watch?v=8dWL3wF_OMw

// ----------------------------------------------------------------------------------------------------
// ARITHMETIC EXPRESSIONS
// ----------------------------------------------------------------------------------------------------

//% modulus opperator helps you figure out if a number is even or odd

let students = 21;
let extraStudents = students % 2;

console.log(extraStudents);

// if extra students is 1, that means you have an odd number
// if extra students is 0, that means you have an even number

// ----------------------------------------------------------------------------------------------------
// TYPE CONVERSION
// ----------------------------------------------------------------------------------------------------

//converting a string to a number
let oldAge = "21";
age = Number(oldAge);
age += 1;

//get the datatype of a variable
// will tell you the data type
console.log(typeof age);
// OUTPUT - number

//convert to a string
let y = String(3.14);
console.log(y);
// OUTPUT - "3.14"

//convert a boolean
//helpful in a situation where a user inputs their name and if they skip the step you can use an if statement to see if they typed in their name or not
let z = Boolean("");
let a = Boolean("pizza");

console.log(z);
//OUT PUT - false

console.log(a);
//OUT PUT - true

//NaN
//not a number
let x = Number("pizza");
console.log(x);
//OUT PUT - NaN

// ----------------------------------------------------------------------------------------------------
// Const
// ----------------------------------------------------------------------------------------------------

// for a constant make all naming letts upper case
// const get used when the variable will not be changed

const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("the circumference is", circumference);

// ----------------------------------------------------------------------------------------------------
// Math
// ----------------------------------------------------------------------------------------------------

// gives you access to a bunch of different functions that come after it

let b = 3.14;
let c = 5;
let d = 9;
let maximum;
let minimum;

b = Math.round(b);
//OUT PUT- 3

b = Math.floor(b);
// OUT PUT- 3
// .floor() rounds down

b = Math.ceil(b);
// OUT PUT- 4
// .ceil() rounds up

b = Math.pow(b, 2);
// OUT PUT- 9.8
// B to the power of 2
// can raise to a power

b = Math.sqrt(b);
//OUT PUT- 1.77
//square root

b = Math.abs(b);
// OUT PUT- 3.14
//absolute value is the ditance away form 0

maximum = Max.max(b, c, d);
// OUT PUT- 9
// finds the maximum of the values listed

minimum = Max.min(b, c, d);
// OUT PUT - 3.14
// finds the minimum of the values listed

//Other Math Fucntions

Math.sin();
// It provides a sine of the given number. It can be written as:
// Math.sin(x); where x is a number.

Math.cos();
// It provides cosine of the given number. It can be written as:
// Math.cos(x); where x is a number

Math.random();
// It provides a random number between 0 and 1. It can be written as:
// Math.random();

Math.sign();
// Returns the sign of the x, indicating whether x is positive, negative, or zero.

Math.trunc();
// Returns the integer portion of x, removing any fractional digits.

// ----------------------------------------------------------------------------------------------------
// Math
// ----------------------------------------------------------------------------------------------------
