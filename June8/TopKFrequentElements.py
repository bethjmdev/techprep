# question:
# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

# youtube video for reference:
# https://www.youtube.com/watch?v=YPTqKIgVk-k

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(nums) +1]
        #this determines the size based on the array +1 more slot

        for n in nums:
            count[n] = 1 + count.get(n, 0)
            #this is how we will count how many times each value in nums occurs
        for n, c in count.items():
            #this will return each key value pair in the dictionary (number and count)
            freq[c].append(n)
            #c is the index
            #says "this value, n, occurs c number of times"

        res = []
        #
        for i in range(len(freq) -1, 0, -1):
            for n in freq[i]:
                res.append(n)
                if len(res) == k:
                    return res