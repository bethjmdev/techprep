// 387. First Unique Character in a String
// Paste this entire file into your IDE and run with: node test.js

// ===============================
// Function to implement
// ===============================
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
