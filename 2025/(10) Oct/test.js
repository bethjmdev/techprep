

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // your code here

    let ransomMap = {};
    let magazineMap = {};

    if (ransomNote.length !== magazine.length) {
        return false
    }


    for (let i = 0; i < ransomNote.length; i++) {
        if (ransomMap[ransomNote] === undefined) {
            ransomMap[ransomNote] = 1
        } else {
            ransomMap[ransomNote] += 1
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        if (magazineMap[magazine] === undefined) {
            magazineMap[magazine] = 1;
        } else {
            magazineMap[magazine] += 1;
        }
    }

    // for (let letter in magazineMap) {
    //     if 
    // }

    if (magazineMap === ransomMap) {
        return true
    } else {
        return false
    }



};


// ------------------ TEST CASES ------------------
function runTests() {
    const tests = [
        { ransomNote: "a", magazine: "b", expected: false },
        { ransomNote: "aa", magazine: "ab", expected: false },
        { ransomNote: "aa", magazine: "aab", expected: true },

        // extra cases you can try
        { ransomNote: "", magazine: "anything", expected: true }, // empty ransom note
        { ransomNote: "abc", magazine: "cba", expected: true }, // exact letters
        { ransomNote: "abcd", magazine: "abc", expected: false }, // missing one
        { ransomNote: "zzz", magazine: "zzzzzz", expected: true }, // plenty of repeats
    ];

    tests.forEach((test, i) => {
        const result = canConstruct(test.ransomNote, test.magazine);
        console.log(`Test ${i + 1}:`, 
            "ransomNote =", test.ransomNote, 
            "magazine =", test.magazine, 
            "=> result:", result, 
            "| expected:", test.expected
        );
    });
}

runTests();
