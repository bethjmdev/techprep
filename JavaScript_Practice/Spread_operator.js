// spread operator =
// allows an iterable thing like an array or string to be expanded in places where zero or more agruments are expects (unpacks the elements)
// spreads it into individual arguments
//like opening up a box and taking out whats inside

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(numbers);
console.log(maximum);
//OUT PUT- Nan

let maxNum = Math.max(...numbers);
console.lof(maxNum);
//OUT PUT- 9

//merging the classes into 1 class

let class1 = ["Spongebob", "patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(class2);
console.log(class1);
//OUT PUT- ['Spongebob', "patrick", "Sandy", Array(3)]

class1.push(...class2);
console.log(class1);
//OUT PUT- ['Spongebob', "patrick", "Sandy","Squidward", "Mr.Krabs", "Plankton"];

console.log(...class1);
//OUT PUT- Spongebob Patrick Sandy Squidward Mr.Krabs Plankton
