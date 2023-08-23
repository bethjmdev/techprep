var isAnagram = function () {
  let s = "aacc";
  let t = "ccac";

  let inputLength = 0;

  s = s.split("");
  t = t.split("");

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (t[j] === s[i]) {
        inputLength += 1;
        console.log("S is", s[j], "position", j, "I is", t[i], "position", i);
        console.log("input length is", inputLength);
        break;

        //add something that says when they find the first matching letter, move on
      }
    }
  }

  if (inputLength == s.length) {
    return true;
  }

  return false;
};

isAnagram();

/////////----------

var isAnagram = function () {
  let s = "aacc";
  let t = "cacc";

  s = s.split("");
  t = t.split("");

  if (s.length !== t.length) {
    return false;
  }

  s.sort();
  console.log("sorted", s);

  t.sort();
  console.log("sorted", t);

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s === t) {
        console.log("in the for statement", s, t);
        return true;
      }
    }
  }

  return false;
};

isAnagram();
