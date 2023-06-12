class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap= {}
        #prev map because we're adding values AFTER we've assessed them

        for i, n in enumerate(nums):
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i
        return