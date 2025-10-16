/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    let iso = {}

    let tExists = new Set();

    s = s.split("")
    t = t.split("")
    
    for (let i = 0; i < s.length; i++) {

        console.log("### FOR LOOP")

        console.log("length",s.length, i + 1)



        if (iso[s[i]] === undefined) {
            console.log("****IF block")

            console.log(tExists.has(t[i]))

            if (!tExists.has(t[i])){
                tExists.add(t[i])
            } else {
                return false
            }

            iso[s[i]] = t[i]

            console.log("iso", iso)

        } else {
    
            console.log("**Else block")
    

            //this is where iso[s[i]] is defined
            //I need to check if it matches with t[i]
            if (iso[s[i]] !== t[i]) {

                return false

            }
        }



    }
console.log('iso map',iso)

return true

};



// ---------- TEST SETUP ----------
function runTests() {
    const tests = [
        { s: "egg", t: "add", expected: true },
        // { s: "paper", t: "title", expected: true },
        // { s: "abc", t: "def", expected: true },
        // { s: "a", t: "a", expected: true },
        // { s: "ab", t: "ca", expected: true },

        // { s: "foo", t: "bar", expected: false },
        // { s: "bbbaaaba", t: "aaabbbba", expected: false },


        // { s: "ab", t: "aa", expected: false },
        // { s: "badc", t: "baba", expected: false },
        // { s: "ab", t: "cc", expected: false }
    ];

    for (let i = 0; i < tests.length; i++) {
        const { s, t, expected } = tests[i];
        const result = isIsomorphic(s, t);
        const pass = result === expected ? "✅" : "❌";
        console.log(`${pass} Test ${i + 1}: isIsomorphic("${s}", "${t}")`);
        console.log(`   Expected: ${expected}, Got: ${result}`);
    }
}

runTests();
