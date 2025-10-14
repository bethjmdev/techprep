
// let currentSum = 0;
// let totalSum = 0;

// if (nums.length < k) {
//     return null
// }

// for (let i = 0; i < k; i++) {
    
//     currentSum += nums[i]

// }


// for (let end = k; end < nums.length; end++) {

//     //[end - k] becuase the one that sropping off is always k behind the last number
//     currentSum = (currentSum - [end-k]) + nums[end]
// }

// if (currentSum > totalSum) {
//     totalSum = currentSum
// }

// return totalSum

// ---------------------------------------------


function countUniqueChars(s, k) {

    //return if length is not enough
    if (s.length < k) return [];
  
    //you'll push the values to this array after looking through the string
    const result = [];

    //map you'll use to add and subtract values to and from
    const charCount = {};


    //moves the left side of the window
    let start = 0;
  

    
    for (let end = 0; end < s.length; end++) {
      const rightChar = s[end];
      // Add new character to map or increase its count
      charCount[rightChar] = (charCount[rightChar] || 0) + 1;
  
      // When we have a full window of size k
      if (end >= k - 1) {
        // Count how many unique characters we have
        result.push(Object.keys(charCount).length);
  
        // Remove the character that is sliding out
        const leftChar = s[start];
        charCount[leftChar]--;
  
        // If its count hits 0, remove it completely
        if (charCount[leftChar] === 0) {
          delete charCount[leftChar];
        }
  
        // Move window forward
        start++;
      }
    }
  
    return result;
  }
  
  // Try it out
  console.log(countUniqueChars("abcabc", 2)); // [2, 2, 2, 2, 2]
  console.log(countUniqueChars("aabb", 2));   // [1, 2, 1]
  