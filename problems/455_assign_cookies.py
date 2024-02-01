from heapq import heapify, heappop


class Solution:
    def findContentChildren(self, g: list[int], s: list[int]) -> int:
        heapify(g)
        heapify(s)
        count = 0
        while g and s:
            if g[0] <= s[0]:
                heappop(g)
                heappop(s)
                count += 1
            else:
                heappop(s)
        return count
