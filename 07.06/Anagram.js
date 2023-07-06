// not my code, asked chat gpt to explain the two sum solution to me so I can better understand how to code leetcode q's

// ```javascript
// var isAnagram = (s, t) => {
// ```
// - Declare a variable `isAnagram` and assign an arrow function to it. This function takes two parameters: `s` and `t`, which are the two strings we want to compare for anagramness.

// ```javascript
//     const isEqual = s.length === t.length;
// ```
// - Calculate whether the lengths of the two input strings `s` and `t` are equal and store the result in the variable `isEqual`.

// ```javascript
//     if (!isEqual) return false;
// ```
// - If the lengths of the two strings are not equal, it means they cannot be anagrams. In this case, the function immediately returns `false`.

// ```javascript
//     return reorder(s) === reorder(t);
// ```
// - Call the `reorder` function on both `s` and `t`, and compare the sorted strings. If the sorted strings are equal, it means the original strings are anagrams. In this case, the function returns `true`. Otherwise, it returns `false`.

// ```javascript
// };

// const reorder = (str) => str
//     .split('')                         /* Time O(N)          | Space O(N) */
//     .sort((a, b) => a.localeCompare(b))/* Time O(N * log(N)) | Space O(1 || log(N)) */
//     .join('');
// ```
// - Declare a separate `reorder` function that takes a string (`str`) as input.
// - The string is first split into an array of characters using `.split('')`. This operation has a time complexity of O(N), where N is the length of the input string. The space complexity is also O(N) since a new array is created.
// - The array of characters is then sorted using `.sort((a, b) => a.localeCompare(b))`. This sorting operation has a time complexity of O(N * log(N)), where N is the length of the input string. The space complexity for the sorting operation is O(1) or O(log(N)) depending on the implementation of the sorting algorithm used.
// - Finally, the sorted array is joined back into a string using `.join('')`. The time complexity of this operation is O(N), and the space complexity is O(N) since a new string is created.
