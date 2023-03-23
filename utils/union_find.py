# Based on https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3843/
# Optimized "disjoint set" with path compression and union by rank.
# Path compression: update intermediate nodes to all point to root for each find.
# Union by rank: use height of sets to determine which


class UnionFind:
    size: int
    _roots: list[int]
    _ranks: list[int]

    def __init__(self, size: int):
        if size <= 0:
            raise Exception("Invalid size.")
        self.size = size
        self._roots = [i for i in range(size)]
        self._ranks = [1] * size

    def union(self, a: int, b: int) -> None:
        root_a = self.find_root(a)
        root_b = self.find_root(b)
        rank_a = self._ranks[root_a]
        rank_b = self._ranks[root_b]
        if rank_a < rank_b:
            self._roots[root_a] = root_b
        elif rank_a > rank_b:
            self._roots[root_b] = root_a
        else:
            self._roots[root_b] = root_a
            self._ranks[root_a] += 1

    def connected(self, a: int, b: int) -> bool:
        root_a = self.find_root(a)
        root_b = self.find_root(b)
        return root_a == root_b

    def find_root(self, index: int) -> int:
        if self._roots[index] == index:
            return index
        parent = self._roots[index]
        root = self.find_root(parent)
        self._roots[index] = root
        return root
