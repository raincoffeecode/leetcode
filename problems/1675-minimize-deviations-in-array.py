from math import inf
from heapq import heapify, heappop, heappush


class Solution:
    def minimumDeviation(self, nums: list[int]) -> int:
        if not nums:
            raise Exception("Invalid input")

        min_num = inf
        evens = []

        for num in nums:
            even_num = num if num % 2 == 0 else num * 2
            evens.append(-even_num)
            min_num = min(min_num, even_num)

        heapify(evens)
        min_deviation = inf

        while evens:
            num = -heappop(evens)
            min_deviation = min(min_deviation, num - min_num)
            if num % 2 == 0:
                min_num = min(min_num, num // 2)
                heappush(evens, -num // 2)
            else:
                break

        return min_deviation
