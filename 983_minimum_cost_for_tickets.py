class Solution:
    def mincostTickets(self, days: list[int], costs: list[int]) -> int:
        if not len(days) or len(costs) != 3:
            raise Exception("Invalid input.")

        num_days = len(days)
        min_costs = [0] * len(days)

        for i in range(num_days):
            # First index falling outside of 1-day range.
            j = i - 1

            # First index falling outside of 7-day range.
            k = j
            while k >= 0 and days[i] - days[k] < 7:
                k -= 1

            # First index falling outside of 30-day range.
            l = k
            while l >= 0 and days[i] - days[l] < 30:
                l -= 1

            cost_1 = min_costs[j] + costs[0] if j >= 0 else costs[0]
            cost_2 = min_costs[k] + costs[1] if k >= 0 else costs[1]
            cost_3 = min_costs[l] + costs[2] if l >= 0 else costs[2]

            min_costs[i] = min(cost_1, cost_2, cost_3)

        return min_costs[-1]
