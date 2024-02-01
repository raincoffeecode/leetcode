from heapq import heapify, heappop


class Solution:
    def sortArray(self, nums: list[int]) -> list[int]:
        sorted: list[int] = []
        heapify(nums)
        while nums:
            sorted.append(heappop(nums))
        return sorted


# This solution works well but requires extra O(n) memory. If we implement our own
# custom max heap implementation, we can use use the back of the list as the already
# sorted section.
print(Solution().sortArray([5, 2, 3, 1]))
