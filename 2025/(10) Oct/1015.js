// @ts-ignore


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//     let counts = {};
//     let half = Math.round(nums.length / 2)

//     for (let i = 0; i < nums.length; i++) {
//         let val = nums[i]
//         if (counts[val] === undefined) {
//             counts[val] = 1
//         } else {
//             counts[val] += 1
//         }
//     }

//     console.log('counts',counts)
//     console.log('half',half)

//     for (let count in counts) {
//         if (counts[count] >= half) {
//             return Number(count)
//         }
//     }
// };

// // Example tests
// console.log(majorityElement([2,2,1,1,1,2,2])); // try with your example
// console.log(majorityElement([3,3,4]));         // another example
// console.log(majorityElement([1]));             // single element
// console.log(majorityElement([2,2]));           // 2

//-----------//-----------//-----------//-----------//-----------//-----------


// @ts-ignore
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  
const plate = {};


let completing = "";


for (let i = 0; i < licensePlate.length; i++) {
    licensePlate = licensePlate.toLowerCase().replace(/[^a-z]/g, "")

    let val = licensePlate[i]
    
    if (plate[val] === undefined){
        plate[val] = 1
    } else {
        plate[val] += 1
    }
}


//now we're looking for a string where wordSalad has everything that's in plate
    for (let i = 0; i < words.length; i++) {
        let salad = words[i];

        for (let j = 0; j < salad.length; j++) {

            // console.log("salad[j]",salad[j])

            let letter = salad[j];

            if (wordSalad[letter] === undefined) {
                wordSalad[letter] = 1
            } else {
                wordSalad[letter] += 1
            }
        }

        //check here is fit has most of the letters
        //if it is the closest to it update placeholder
        //do all of the letters in plate map fit into to wordSalad map?

        let isValid = true;
        for (let letter of Object.keys(plate)) {
            // @ts-nocheck
           

            if (!wordSalad[letter] || wordSalad[letter] < plate[letter]) {
                isValid = false;
            }  

        }

        if (isValid === true) {
            if (completing === "" ||salad.length < completing.length) {
                completing = salad
            }  
        }
      

        lengthCount = 0

        wordSalad = {};
        console.log("_________________________")


    
    }


    return completing


};

// Example test cases
const testCases = [
    // {
    //     licensePlate: "1s3 PSt",
    //     words: ["step","steps","stripe","stepple"],
    //     expected: "steps"
    // },
    // {
    //     licensePlate: "1s3 456",
    //     words: ["looks","pest","stew","show"],
    //     expected: "pest"
    // },
    // this is also ne where I need to slect hte fist one
    {
        licensePlate: "aBc 12c",
        words: ["abccdef","caaacab","cbca"],
        expected: "abccdef"
    },
    // //this is one where i need to select the first one
    // {
    //     licensePlate: "GrE 3",
    //     words: ["green","great","gear","greet"],
    //     expected: "gear"
    // },
    // //this is also one where i need to select the first one
    // {
    //     licensePlate: "ZZ 99",
    //     words: ["zoo","buzz","fizz","pizza"],
    //     expected: "buzz"
    // }
];

// Run test cases
testCases.forEach(({licensePlate, words, expected}, index) => {
    const result = shortestCompletingWord(licensePlate, words);
    console.log(`Test case ${index + 1}:`, result === expected ? "PASS" : `FAIL (got ${result})`);
});
