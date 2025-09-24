/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // split into arrays
    pattern = pattern.split("");
    // console.log("pattern", pattern)
    s = s.split(" ");
    // console.log("s", s)

    let patternMap = {};
    let sMap = {};

    // get pattern into hashmap
    for (let i = 0; i < pattern.length; i++) {
        let pat = pattern[i];

        if (patternMap[pat] === undefined) {
            patternMap[pat] = 1;
        } else {
            patternMap[pat] += 1;
        }
    }

    // console.log("patternMap", patternMap)

    // get s into hashmap
    for (let i = 0; i < s.length; i++) {
        let word = s[i];

        if (sMap[word] === undefined) {
            sMap[word] = 1;
        } else {
            sMap[word] += 1;
        }
    }
 
    //ignores the keys and makes a list of the values
    patternCounts = Object.values(patternMap);
    sCounts = Object.values(sMap);
    console.log("patternCounts", patternCounts)
    console.log("sCounts", sCounts)

    if (patternCounts.toString() === sCounts.toString()) {
        return true
    } else {
        return false
    }


 

};



// ----------------------
// Test cases
// ----------------------
console.log(wordPattern("abba", "dog cat cat dog"));   // true
// console.log(wordPattern("abba", "dog cat cat fish"));  // false
// console.log(wordPattern("aaaa", "dog cat cat dog"));   // false
// console.log(wordPattern("abba", "dog dog dog dog"));   // false
// console.log(wordPattern("abc", "one two three"));      // true
// console.log(wordPattern("abc", "one two two"));        // false
