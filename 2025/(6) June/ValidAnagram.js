class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    //turn from string to array
    s = s.split("");
    t = t.split("");

    const hashmap = {};

    if (s.length !== t.length) {
      return false;
    } else if (s.length === 0 && t.length === 0) {
      return true;
    } else {
      for (let item of s) {
        if (hashmap[item]) {
          hashmap[item] += 1;
        } else hashmap[item] = 1;
      }

      for (let item of t) {
        if (hashmap[item]) {
          hashmap[item] -= 1;
        } else return false;
      }
    }

    const zeroCheck = Object.values(hashmap).every((hash) => hash === 0);

    return zeroCheck;
  }
}
