#watching this youtube video
#https://www.youtube.com/watch?v=KLlXCFG5TnA

#question: two sum
# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
# You can return the answer in any order.

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap= {} #val : index

        for i, n in enumerate(nums):
            diff = target - n
            #check if the value of target - n is in the has map
            if diff in prevMap:
                return [prevMap[diff], i]
                #if it is, return the indeces
            prevMap[n] = i