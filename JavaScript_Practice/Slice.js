// slice extracts a section of a string and returns it as a new string without modifying the original string

let fullName = "Bro Code";
let firstName;
let lastName;

firstName = fullName.slice(0, 3);
console.log(firstName);
//OUT PUT - BRO

lastName = fullName.slice(4);
//starting index and ending index
//if you dont add a second value it is assumed to copy everything at the end of the string
console.log(lastName);
//OUT PUT - Code

//can use indexOf() to search for any spaces and return an index
firstName = fullName.slice(0, fullName.indexOf(" "));
// from zero until there is a space
lastName = fullName.slice(fullName.indexOf(" ") + 1);
// anything after the first space, slice it and create a new string
console.log(firstName, lastName);
