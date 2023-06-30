#continuing valid Anagram from yesterday

#problem: valid anagram
#given two string a and t, truen true if t is an anagram of s, and false otherwise

#sorted order would be the a good way to check becuase they would become the exact same string, down side is time complexity



class Solution:
    def isAnagram (self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)
