from heapq import heappush, heappop


class Solution:
    def findMaximizedCapital(
        self, k: int, w: int, profits: list[int], capital: list[int]
    ) -> int:
        if k <= 0 or len(profits) == 0 or len(profits) != len(capital):
            raise Exception("Invalid input")

        n = len(capital)

        # Construct a list of capital values with corresponding indexes. Sort this in
        # ascending order.
        sorted_projects = [(c, index) for index, c in enumerate(capital)]
        sorted_projects.sort(key=lambda c: c[0])

        min_heap = []
        i = 0

        while k > 0:

            # Fill heap with available entries based on current capital.
            while i < n:
                capital, index = sorted_projects[i]
                if w < capital:
                    break
                profit = profits[index]
                heappush(min_heap, -profit)
                i += 1

            if len(min_heap) == 0:
                break
            else:
                profit = heappop(min_heap)
                w += -profit
                k -= 1

        return w


Solution().findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2])
