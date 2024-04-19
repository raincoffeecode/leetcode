class Solution:
    def timeRequiredToBuy(self, tickets: list[int], k: int) -> int:
        n = len(tickets)
        k_num = tickets[k]
        total = 0
        for i in range(n):
            if i < k:
                total += min(k_num, tickets[i])
            elif i == k:
                total += k_num
            else:
                total += min(k_num - 1, tickets[i])
        return total


print(Solution().timeRequiredToBuy([2, 3, 2], 2))
print(Solution().timeRequiredToBuy([5, 1, 1, 1], 0))
print(Solution().timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3))
