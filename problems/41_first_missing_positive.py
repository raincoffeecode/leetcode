class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        n = len(nums)

        # First, "clear out" any non-positive values.
        for i in range(n):
            if nums[i] <= 0:
                nums[i] = n + 1

        # Update the associated indexes to -1 for nums that exist.
        for i in range(n):
            num = abs(nums[i])
            in_range = num >= 1 and num <= n
            if in_range:
                index = num - 1
                if nums[index] > 0:
                    nums[index] *= -1

        # Check each index and return the 1st associated num that's missing.
        for i in range(n):
            exists = nums[i] < 0
            if not exists:
                return i + 1

        # If all n entries were filled, it must mean that 1 - n all exist, therefore
        # n + 1 is the first missing entry.
        return n + 1
