from utils.union_find import UnionFind


class Solution:
    def minScore(self, n: int, roads: list[list[int]]) -> int:
        if n < 2 or len(roads) == 0:
            raise Exception("Invalid input.")

        min_score = roads[0][2]
        uf = UnionFind(n)

        for [a, b, _] in roads:
            uf.union(a - 1, b - 1)

        for [a, b, distance] in roads:
            if uf.connected(0, a - 1) or uf.connected(0, b - 1):
                min_score = min(min_score, distance)

        return min_score


print(Solution().minScore(4, [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]))
