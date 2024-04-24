class Solution:
    memo: list[int | None]

    def __init__(self):
        self.memo = [0, 1, 1, 2, 4, 7, 13, 24] * 30

    def tribonacci(self, n: int) -> int:
        entry = self.memo[n]
        if entry is not None:
            return entry

        match n:
            case 0:
                ans = 0
            case 1:
                ans = 1
            case 2:
                ans = 1
            case _:
                ans = (
                    self.tribonacci(n - 1)
                    + self.tribonacci(n - 2)
                    + self.tribonacci(n - 3)
                )

        self.memo[n] = ans
        return ans
