// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
    
//     let sumStore = {}

//     for (let i = 0; i < nums.length; i++){
//         //loop through nums
//         //fgure out what value we need  to reach target
//         //check if sumStore has that value
//         //if yes, print
//         //if not, add it to the map

//         let need = target - nums[i];

//         if (sumStore[need] !== undefined) {
//             return [sumStore[need], i]
//         } else {
//             sumStore[nums[i]] = i;
//         }
//     }

// };

// --------------------------------

// /**
//  * @param {string} pattern
//  * @param {string} s
//  * @return {boolean}
//  */
// var wordPattern = function(pattern, s) {
//     // split into arrays
//     pattern = pattern.split("");
//     // console.log("pattern", pattern)
//     s = s.split(" ");
//     // console.log("s", s)

//     let patternMap = {};
//     let sMap = {};

//     // get pattern into hashmap
//     for (let i = 0; i < pattern.length; i++) {
//         let pat = pattern[i];

//         if (patternMap[pat] === undefined) {
//             patternMap[pat] = 1;
//         } else {
//             patternMap[pat] += 1;
//         }
//     }

//     // console.log("patternMap", patternMap)

//     // get s into hashmap
//     for (let i = 0; i < s.length; i++) {
//         let word = s[i];

//         if (sMap[word] === undefined) {
//             sMap[word] = 1;
//         } else {
//             sMap[word] += 1;
//         }
//     }
 
//     //ignores the keys and makes a list of the values
//     patternCounts = Object.values(patternMap);
//     sCounts = Object.values(sMap);
//     console.log("patternCounts", patternCounts)
//     console.log("sCounts", sCounts)

//     if (patternCounts.toString() === sCounts.toString()) {
//         return true
//     } else {
//         return false
//     }


 

// };

//  -- ----------------



/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //pointers?

    //have a pointer on needle first 
        //scan through haystack w pointer until I find the matching letter

        //move pointer of needle + 1 until at needle.length
        //move pointer of haystack + 1
        //if they match continue
        //if they dont return false
        //store the index in something first the first occurance

        //move pointer of needle + 1
        //move pointer of haystack + 1
        //compare

        //if get to end of needle.length return the index of first occurance

        //-------------------------------------

        //prefix
        let needlePointer = 0;

        //long word
        let hayPointer = 0;

        let firstOccurance;

        while (hayPointer <= haystack.length) {
            //need to figure out how to get the pointer to move
            //need to figure out how to associate the pointer with needle
            // console.log("hayPointer", hayPointer, haystack[hayPointer]);
            

            if (haystack[hayPointer] !== needle[needlePointer]) {
                hayPointer++
            } else {
                // return true
                while (needlePointer <= needle.length - 1) {
                    if (firstOccurance === undefined){
                        firstOccurance = hayPointer
                    }

                    if (haystack[hayPointer] !== needle[needlePointer]){
                        // return -1
                        needlePointer = 0;
                        
                    }
                    console.log("needlePointer", needlePointer, needle[needlePointer]);
                    console.log("hayPointer", hayPointer, haystack[hayPointer]);
                    needlePointer++
                    hayPointer++
                    console.log("hayPointer++", hayPointer, haystack[hayPointer]);
                    console.log("needlePointer ++", needlePointer, needle[needlePointer]);
                }
                console.log("FIRST OCCURANCE")
                return firstOccurance
            }


        }
return -1
        
};

// --- Example test cases ---


//return -1
// console.log(strStr("hello", "world"));       // completely different
// console.log(strStr("abcdef", "gh"));         // characters not present
// console.log(strStr("aaaaa", "bba"));         // some letters present but not full sequence
// console.log(strStr("mississippi", "xyz")); 
// console.log(strStr("leetcode", "leeto")); 


//NOT -1
// console.log(strStr("hello", "ll"));          // in the middle, index 2
// console.log(strStr("abcdef", "de"));         // near the end, index 3
console.log(strStr("mississippi", "issip"));  // repeated pattern, index 1
// console.log(strStr("abc", ""));              // empty needle, usually index 0
// console.log(strStr("abc", "a"));             // first character, index 0
// console.log(strStr("abcdef", "f"));  


//edge cases