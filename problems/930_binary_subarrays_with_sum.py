class Solution:
    # Complexity: O(n) time, O(n) space.
    def numSubarraysWithSum(self, nums: list[int], goal: int) -> int:
        freq: dict[int, int] = {}
        sum = 0
        count = 0
        for num in nums:
            sum += num
            diff = sum - goal
            if diff == 0:
                count += 1
            if diff in freq:
                count += freq.get(diff, 0)

            freq[sum] = freq.get(sum, 0) + 1

        return count
