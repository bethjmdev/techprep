
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    // "mississippi", "issip"

    if (needle.length == 0 || haystack.length == 0 || needle.length > haystack.length) {
        return -1
    }

    if (needle.length >= 2 && needle[0] === needle[1]){
        needle = needle[0]
    }


        //prefix
        let needlePointer = needle.length - 1;


        //long word
        let hayPointer = 0;

        //look through haystack to find the last character of needle
        //if I find last character of needle work backwards (towards front) and compare that way

        while (hayPointer <= haystack.length) {

            // console.log("haystack[hayPointer]", haystack[hayPointer])
            // console.log("needle[needlePointer]", needle[needlePointer])
            console.log("while haypointer")

            if (haystack[hayPointer] !== needle[needlePointer]) {
                hayPointer++

            } else {
                console.log("Needle pointer and length", needlePointer, needle.length)
               
                while (needlePointer > 0){
                    console.log(needlePointer, needle[needlePointer], "while needPointer > 0 -- needlePointer")
                    console.log(hayPointer, haystack[hayPointer], "while needPointer >  -- hayPointer")

                    //JUST ADDED
                    if (hayPointer === 0){
                        return hayPointer
                    }

                    if (needle[needlePointer] === haystack[hayPointer]) {
        
                        console.log("HP BEFORE --", hayPointer, haystack[hayPointer])

                        needlePointer--
                        hayPointer--
                        console.log("HP AFTER --", hayPointer, haystack[hayPointer])

                            if (haystack[hayPointer] !== needle[needlePointer++]) {
                                return hayPointer+1
                            }
        
                    } else {
                        console.log("else")
                        return -1
                    }  
                
                }

       
                console.log("NORMAL return", hayPointer, haystack[hayPointer])
                    return hayPointer


              
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
// console.log(strStr("aaa", "aaaa"));  


//NOT -1
// console.log(strStr("hello", "ll"));          // in the middle, index 2
// console.log(strStr("book", "oo"));          // in the middle, index 1
// console.log(strStr("abcdef", "de"));         // near the end, index 3
// console.log(strStr("mississippi", "issip"));  // repeated pattern, index 4
// console.log(strStr("abc", "a"));             // first character, index 0
// console.log(strStr("abcdef", "f"));      //5
// console.log(strStr("aaa", "aaa"));  //0
// console.log(strStr("mississippi", "mississippi"));  // repeated pattern, index 0
console.log(strStr("mississippi", "issi"));  // repeated pattern, index 0




//edge cases
// console.log(strStr("abc", ""));              // -1
