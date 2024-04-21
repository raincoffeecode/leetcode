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


class Solution:
    def validPath(
        self, n: int, edges: list[list[int]], source: int, destination: int
    ) -> bool:
        uf = UnionFind(n)
        for [u, v] in edges:
            uf.union(u, v)
        return uf.connected(source, destination)
