

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    // let rMap = {}
    let mMap = {}

    if (ransomNote.length === 0 ) {
        return true
    }

    for (let i = 0; i < magazine.length; i++) {
        console.log("magI",magazine[i])
        if (mMap[magazine[i]] === undefined) {
            mMap[magazine[i]] = 1
        } else {
            mMap[magazine[i]] += 1
        }
    }


    console.log(mMap)

    for (let i = 0; i < ransomNote.length; i++) {
        let letter = ransomNote[i]

        console.log(letter)

        console.log(mMap[letter])

        if (mMap[letter] !== undefined && mMap[letter] > 0){
            console.log("in IF block")
            console.log(mMap[letter])
            //if it's in there then subract it
            mMap[letter] -= 1
        } else {
            return false
        }
    }

    return true

};


// ------------------ TEST CASES ------------------
function runTests() {
    const tests = [
        // { ransomNote: "a", magazine: "b", expected: false },
        // { ransomNote: "aa", magazine: "ab", expected: false },
        // { ransomNote: "aa", magazine: "aab", expected: true },

        // // extra cases you can try
        // { ransomNote: "", magazine: "anything", expected: true }, // empty ransom note
        // { ransomNote: "abc", magazine: "cba", expected: true }, // exact letters
        // { ransomNote: "abcd", magazine: "abc", expected: false }, // missing one
        // { ransomNote: "zzz", magazine: "zzzzzz", expected: true }, // plenty of repeats
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
