// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {character}
//  */
// var findTheDifference = function(s, t) {


//     let findDiff = {};
//     let theDiff = {};

//     for (let i = 0; i < s.length; i++){
//         let letter = s[i]
//         if(findDiff[letter] === undefined) {
//             findDiff[letter] = 1
//         } else {
//             findDiff[letter] += 1
//         }
//     }

//     console.log("1",findDiff)


//     for (let i = 0; i < t.length; i++) {
//         let letter = t[i]

//         if (theDiff[letter] === undefined) {
//             theDiff[letter] = 1
//         } else {
//             theDiff[letter] += 1
//         }

//     }

//     console.log(findDiff, "+",theDiff)


//     for (let diff in theDiff ) {
//         if (findDiff[diff] !== theDiff[diff]){
//             return diff
//         }
//     }


    


//   };
  
  
//   // ---------------------------
//   // Test setup
//   // ---------------------------
//   function runTests() {
//     const tests = [
//       { s: "abcd", t: "abcde", expected: "e" },
//       { s: "", t: "y", expected: "y" },
//       { s: "a", t: "aa", expected: "a" },
//       { s: "ae", t: "aea", expected: "a" },
//       { s: "xyz", t: "xzyz", expected: "z" },
//       { s: "hello", t: "helxlo", expected: "x" },
//       { s: "apple", t: "paple", expected: "p" },
//       { s: "qqq", t: "qqqq", expected: "q" },
//     ];
  
//     tests.forEach((test, i) => {
//       const result = findTheDifference(test.s, test.t);
//       const pass = result === test.expected ? "✅ PASS" : "❌ FAIL";
//       console.log(`Test ${i + 1}: s = "${test.s}", t = "${test.t}"`);
//       console.log(` result: ${result}`);
//       console.log(` expected: ${test.expected}`);
//       console.log(` ${pass}`);
//       console.log("--------------------------------");
//     });
//   }
  
//   runTests();
  

  // --------------------------------
    // --------------------------------
      // --------------------------------
        // --------------------------------
          // --------------------------------
// --------------------------------



  function firstUniqChar(s) {
    

    let uniqueMap = {};
    let smallestIndex = 1000000;

    for (let i = 0; i < s.length; i++) {

        let letter = s[i]

        if (uniqueMap[letter] === undefined) {
            uniqueMap[letter] = {count: 1, index: i}
        } else {
            uniqueMap[letter] = {count: uniqueMap[letter].count + 1, index: i}
        }
    }

    console.log("------",uniqueMap)

    for (let val in uniqueMap) {
        if (uniqueMap[val].count === 1) {
            console.log("uniqueMap[val].count",val, uniqueMap[val].count)
            if (smallestIndex > uniqueMap[val].index) {
                smallestIndex = uniqueMap[val].index
                console.log("smallestIndex", smallestIndex)
            }
        }
        
        
    }


    if (smallestIndex !== 1000000) {
        return smallestIndex
    } else {
        return -1
    }

}

// ===============================
// Test cases
// ===============================
const testCases = [
    { s: "leetcode", expected: 0 },
    { s: "loveleetcode", expected: 2 },
    { s: "aabb", expected: -1 },
    { s: "abcabcde", expected: 6 },
    { s: "xxyz", expected: 2 },
    { s: "zz", expected: -1 },
    { s: "z", expected: 0 },
    { s: "bbaaccdd", expected: -1 },
    { s: "aadadaad", expected: -1 },
    { s: "swiss", expected: 1 },
];

// ===============================
// Test runner
// ===============================
testCases.forEach((test, index) => {
    const result = firstUniqChar(test.s);
    console.log(`Test ${index + 1}: s = "${test.s}"`);
    console.log(`Result: ${result}`);
    console.log(`Expected: ${test.expected}`);
    console.log(result === test.expected ? "✅ PASS" : "❌ FAIL");
    console.log('--------------------------------');
});
