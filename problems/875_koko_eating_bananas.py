from math import ceil


class Solution:
    def minEatingSpeed(self, piles: list[int], h: int) -> int:
        n = len(piles)
        if n == 0 or h < n:
            raise Exception("Invalid input.")

        left = 1
        right = max(piles)

        while left < right:
            mid = (left + right) // 2
            required_hours = 0
            for pile in piles:
                required_hours += ceil(pile / mid)
            can_eat = h >= required_hours
            if can_eat:
                right = mid
            else:
                left = mid + 1

        return left
