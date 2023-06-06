
#problem: valid anagram
#given two string a and t, truen true if t is an anagram of s, and false otherwise

#watching this youtube video:
#https://www.youtube.com/watch?v=9UtInBqnCgA

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        #if the strings are not the same length, return false (if they're not the same length, they can't be annagrams)
        constS, countT = {}, {}
        #objects for both t and s to add elements to

        for i in range(len(s)):
            countS[s[i]] = 1 + countS.get(s[i], 0)
            #if the key does not exist in the hash map, then the value it will return is 0
            #counting the occurences of each character
            countS[t[i]] = 1 + countT.get(t[i], 0)
            #does the same thing with T
        for c in countS:
            if countS[c] != countT.get(c, 0):
                #look into more info on .get 
                return False
                #if the hash maps are not the same, return false

        return True