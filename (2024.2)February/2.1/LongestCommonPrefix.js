//Longest Common Prefix
//learning from https://www.basedash.com/blog/how-to-find-the-longest-common-prefix-in-javascript

//my interpurtation of the probelm
function findLongestCommonPrefix(strs) {
  //checking if the strs are empty, if they are return ""
  if (!strs.length) return "";

  //prefix holds where the longest common prefix index is
  let prefix = strs[0];

  //looping through the strings
  for (let i = 1; i < strs.length; i++) {
    //not sure what this does
    while (strs[i].indexOf(prefix) !== 0) {
      //comapre the word and remove one letter from the end and recompare until they match
      prefix = prefix.substring(0, prefix.length - 1);
      //not sure what this does
      if (!prefix) return "";
    }
  }
  //returns the answer
  return prefix;
}

//blog explanation
function findLongestCommonPrefix(strs) {
  if (!strs.length) return "";
  //Initialize the prefix to the first string in the array.
  let prefix = strs[0];

  //Iterate over the array of strings.
  for (let i = 1; i < strs.length; i++) {
    //Use the indexOf function to check if the current string contains the prefix at the start
    while (strs[i].indexOf(prefix) !== 0) {
      //If not, reduce the prefix by one character from the end and repeat the process.
      prefix = prefix.substring(0, prefix.length - 1);
      //If the prefix is empty or the prefix is found at the start of each string, return the prefix.
      if (!prefix) return "";
    }
  }

  return prefix;
}
