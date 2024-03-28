class Solution:
    def maxSubarrayLength(self, nums: list[int], k: int) -> int:
        max_len = 0
        counts: dict[int, int] = {}
        left = 0
        for right, num in enumerate(nums):
            count = counts.get(num, 0)
            counts[num] = count + 1
            if count + 1 <= k:
                max_len = max(max_len, right - left + 1)
            else:
                while left <= right:
                    num2 = nums[left]
                    count2 = counts.get(num2, 0)
                    counts[num2] = count2 - 1
                    left += 1
                    if num2 == num:
                        break
        return max_len
