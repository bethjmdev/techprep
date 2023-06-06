# problem to solve: contains duplicate
# given an integer array nums, reutn true if any value appears at least twice in the array, and return false if every element is distinct


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        #nums: List[int] which indicates that nums should be a list containing integers.
        hashset= set ()
        #creating an empty hashset to add value to

        for n in nums:
            if n in hashset:
                return True
                #if you check the hash set and there is a duplicate, say true
            hashset.add(n)
            #if there is not a duplicate, add the number to the hash set and..
        return False
        #return false



