// /**
//  * @param {string} paragraph
//  * @param {string[]} banned
//  * @return {string}
//  */
// var mostCommonWord = function(paragraph, banned) {

// let allowedMap = {}
// let notAllowed = {}

// let highest = 0;
// let letter;

// let sentence = paragraph.toLowerCase().split(" ");
// console.log("SENTENCE",sentence)
// console.log("BANNNED",banned)

// for (let i = 0; i < sentence.length; i++) {

//     let theWord = sentence[i]
//     if (allowedMap[theWord] === undefined) {
//         allowedMap[theWord] = 1
//     } else if (allowedMap[theWord] !== undefined){
//         allowedMap[theWord] += 1
//     }
// }

// for (let i = 0; i < banned.length; i++) {

//     let bannedWord = banned[i]

//     if (notAllowed[bannedWord] === undefined) {
//         notAllowed[bannedWord] = 1
//     }

// }


// for (let word in allowedMap) {
//     //subtract the banned words from words
//     if (notAllowed[word]) {
//        delete allowedMap[word]
//     }
// }

// console.log("NEW MAP", allowedMap)

//     // go through the hashmap to find the most occuring
//     for (let word in allowedMap) {

//         console.log("allowedMap[word] ",allowedMap[word] )
//         if (allowedMap[word] > highest) {
//             highest = allowedMap[word]
//             letter = word

//             console.log("letter",letter)
//             console.log("highest",highest)
//         }

      
//     }

//     return letter
// };



// // ------------------ TEST SETUP ------------------

// function runTest(paragraph, banned, expected) {
//     const result = mostCommonWord(paragraph, banned);
//     // console.log("Paragraph:", paragraph);
//     // console.log("Banned:", banned);
//     console.log("Result:", result);
//     console.log("Expected:", expected);
//     console.log(result === expected ? "✅ PASS" : "❌ FAIL");
//     console.log("--------------");
// }


// // ------------------ TEST CASES ------------------

// // runTest(
// //     "Bob hit a ball, the hit BALL flew far after it was hit.",
// //     ["hit"],
// //     "ball"
// // );

// // runTest(
// //     "a.",
// //     [],
// //     "a"
// // );

// // runTest(
// //     "Tom jumped high! Tom ran fast. Jumped, ran, and jumped again.",
// //     ["ran"],
// //     "jumped"
// // );

// // runTest(
// //     "Wow wow wow, test test, TEST test!",
// //     ["wow"],
// //     "test"
// // );

// // runTest(
// //     "The quick brown fox jumped over the lazy dog.",
// //     ["the", "over"],
// //     "quick"
// // );

// // runTest(
// //     "Go go go stop STOP stop Go!",
// //     ["stop"],
// //     "go"
// // );


// runTest(
//     "a b.b",
//     [""],
//     "b"
// );







/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    
    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
      ];

    let morseAlphabet = {};

    let newWord = new Set();
      
      for (let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i]
        morseAlphabet[letter] = morseCode[i]
      }

      console.log(morseAlphabet)


      for (let i = 0; i < words.length; i++) {
        let hold = []

        let makeMorse = words[i]
        for (let j = 0; j < makeMorse.length; j++){

            let letter = makeMorse[j]
            // console.log(letter)

            hold.push(morseAlphabet[letter])

            console.log("morse ALPHA",morseAlphabet[letter], makeMorse, letter)
        }
        
        hold = hold.join("");
        console.log("HOLD", hold)

        newWord.add(hold)

        console.log("NEW WORD!!!",newWord)

      }

      console.log("newWord.size",newWord.size)

      return newWord.size

};



// ------------------ TEST SETUP ------------------

function runTest(words, expected) {
    const result = uniqueMorseRepresentations(words);
    console.log("Words:", words);
    console.log("Result:", result);
    console.log("Expected:", expected);
    console.log(result === expected ? "✅ PASS" : "❌ FAIL");
    console.log("--------------");
}


// ------------------ TEST CASES ------------------

runTest(
    ["gin","zen","gig","msg"],
    2
);

runTest(
    ["a"],
    1
);

runTest(
    ["no","on","nn","oo"],
    3
);

runTest(
    ["abc","def","ghi"],
    3
);

runTest(
    ["aa","a","aaa","aaaa"],
    1
);

runTest(
    ["hi","hi","hi"],
    1
);

runTest(
    ["sos","pop","mop","sos","sos"],
    3
);


