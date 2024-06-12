from heapq import heapify, heappop


class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        inverted = [-num for num in nums]
        heapify(inverted)
        for _ in range(k - 1):
            heappop(inverted)
        return -inverted[0]
