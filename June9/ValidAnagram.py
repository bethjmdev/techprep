class Solution:
    def inAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
        #if the strings are not the same length
            return False
            #return false
        countS, countT = {}, {}
        #this is creating the hashmaps for each string

        for i in range(len(s)):
            #range tells the computer to go through the string as many times as strign s is long
            #can use just 's' for length reference because we knwo they're the same length
            countS[s[i]] = 1 + countS.get(s[i], 0)
            countT[s[i]] = 1 + countT.get(s[i], 0)
            #each time we see that character we want to increment the count of that character by one
            #all of this creates the hashmap
            #counts occurance of each character in string s
            #s at index I is referencing the key

        for c in countS:
            if countS[c] != countT.get[c, 0]:
                return False

        return True