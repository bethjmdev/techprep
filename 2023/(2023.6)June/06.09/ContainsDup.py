class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set ()
        #creating the hash set

        for n in nums:
        #n is the array of number we're looking at
            if n in hashset:
            #if n is in the hashset
                return True
            hashset.add(n)
            #if it's not, add it to the hashset

            