//Using spread operator
// In this approach, the spread operator … is used to spread the characters of the string str into individual elements. The reverse() method is then applied to reverse the order of the elements, and join() is used to combine the reversed elements back into a string.

// Example: This example shows the above-explained approach.

const str = "Geeks for Geeks";
const reversedStr = [...str].reverse().join("");
console.log(reversedStr);
// Output
// skeeG rof skeeG
