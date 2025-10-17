// /**
//  * Mock setup for testing "First Bad Version"
//  * Paste your code inside the indicated section.
//  */

// /**
//  * Definition for isBadVersion()
//  * @param {integer} version
//  * @return {boolean}
//  */
// let bad; // this will be assigned in each test
// const isBadVersion = function(version) {
//     return version >= bad;
// };

// /**
//  * @param {function} isBadVersion
//  * @return {function}
//  */
// var solution = function(isBadVersion) {
//     /**
//      * @param {integer} n Total versions
//      * @return {integer} The first bad version
//      */
//     return function(n) {
//         // -------------------------------
//         // PUT YOUR CODE HERE
//         // -------------------------------

//         // console.log('n',n)

//         let left = 1;
//         let right = n;
//         let mid;


//         while (left <= right){

//             mid = Math.floor((left + right) / 2)
//             // console.log("MID", mid)
            
//             if (isBadVersion(mid) === true) {
//                 right = mid - 1
//                 // console.log("--- true")
//                 // console.log("RIGHT", right)
//             } else if (isBadVersion(mid) === false) {
//                 left = mid + 1
//                 // console.log("--- false")
//                 // console.log("LEFT",left)
//             }        


            
//         }

//         return left 

//         // console.log("______________________________________")
//     };


// };

// // -------------------------------
// // TESTING SECTION
// // -------------------------------
// function runTest(n, badInput, expected) {
//     bad = badInput;
//     const findFirstBad = solution(isBadVersion);
//     const result = findFirstBad(n);
//     console.log(`n=${n}, bad=${badInput} | expected=${expected}, got=${result}`);
// }

// // Example test cases
// runTest(5, 4, 4);  // Example 1
// runTest(1, 1, 1);  // Example 2

// // Additional tests
// // runTest(10, 7, 7);
// runTest(2, 2, 2);
// runTest(8, 1, 1);
// runTest(20, 19, 19);
// // runTest(100, 57, 57);
// runTest(3, 2, 2);


// --------------------------------------------------------