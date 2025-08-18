class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {


let letterCount = {};


//first check to see if both of these are the same length becuase the rest is moot if theyre not
if (s.length !== t.length) return false


//turn the strings to be an array of chars
s = s.split('');
t = t.split('');
//needed to add '' to get it to split to ind characters


for (let i = 0; i < s.length; i++) {
let sValue = s[i];

if (letterCount[sValue] === undefined) {
//add key and make value 1
letterCount[sValue] = 1;
} else {
//add 1 to the value
letterCount[sValue] += 1;
}  
}

//so now ideally all of the letters from the first string are in the hashmap

//now i need to get the second array comparing to the first one then return true or false depending


for (let j = 0; j < t.length; j++) {
    let tValue = t[j];

    if (letterCount[tValue] === undefined || letterCount[tValue] === 0) {
    return false;
    } else {
    letterCount[tValue] -= 1;
    }
}

//now i need to check at the end to see if the values are balalnced

for (let key in letterCount) {
    if (letterCount[key] !== 0){
    return false;
    }
}

return true;

//dont have true in else part have it seperate

}
}


// ------------------------------------------------------------

