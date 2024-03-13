from math import ceil

MAX_N = 1000
memo = [(n**2 + n) // 2 for n in range(MAX_N + 1)]


class Solution:
    def pivotInteger(n: int) -> int:
        if n == 1:
            return 1
        pivot = ceil(n / 2)
        while pivot < n:
            print("")

        return -1
