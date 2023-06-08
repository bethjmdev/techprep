#question:
# Given an array of strings strs, group the anagrams together. You can return the answer in any order.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

#youtube video to reference:
#https://www.youtube.com/watch?v=vzdNOK2oB2E

class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = defaultdict(list) #mapping character count to list of anagrams
        #defaultdict makes the intial value of each a list

        for s in strs:
            count = [0] * 26 
            # counts 26 0's

            for c in s:
                count[ord(c) - ord("a")] += 1
                #map the ascy value of each number
                #counting each character we have

            res[tuple(count)].append(s)
            #lists in python cannot be keys so you must include tuple becuase they are non mutable
            #group all anagrams in this particular count together

            return res.values()

