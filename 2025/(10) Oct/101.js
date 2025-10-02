
//unsuccessful

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let rMap = {}
    let mMap = {}

    if (ransomNote.length === 0 ) {
        return true
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (rMap[ransomNote] === undefined) {
            rMap[ransomNote] = 1
        } else {
            rMap[ransomNote] += 1
        }
    }


    for (let i = 0; i < magazine.length; i++) {
        if (mMap[magazine] === undefined) {
            mMap[magazine] = 1
        } else {
            mMap[magazine] += 1
        }
    }


    //now we need to see if the values of magazine are >= ransomeNote

    for (let letter in mMap) {
        //subtract rMap from mMap
        //if unable to subtract return false
        //check mMap to make sure there's no negative
        // no negatives, return true

        console.log("mMap[letter]", mMap[letter], letter)
        console.log("rMap Letter",rMap[letter])

        if (rMap[letter] !== undefined) {
            console.log("ENTERING IF !== undefined")
            mMap[letter] -= rMap[letter];

            if (mMap[letter] < 0) {
                console.log("mMap[letter]",mMap[letter])
                return false
                
            }

        } else {
            console.log("IN ELSE RETURN FALSE")
            return false
        }


    }

    return true

};


// ------------------ TEST CASES ------------------
function runTests() {
    const tests = [
        { ransomNote: "a", magazine: "b", expected: false },
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
