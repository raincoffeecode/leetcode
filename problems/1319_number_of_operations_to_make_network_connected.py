from utils.union_find import UnionFind


class Solution:
    def makeConnected(self, n: int, connections: list[list[int]]) -> int:
        if len(connections) < n - 1:
            return -1
        uf = UnionFind(n)
        for [a, b] in connections:
            uf.union(a, b)
        distinct_sets: set[int] = set()
        for i in range(n):
            root = uf.find_root(i)
            distinct_sets.add(root)
        return len(distinct_sets) - 1
