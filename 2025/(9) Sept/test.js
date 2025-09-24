
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
                        return -1
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