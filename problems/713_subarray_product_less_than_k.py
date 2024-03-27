class Solution:
    def numSubarrayProductLessThanK(self, nums: list[int], k: int) -> int:
        n = len(nums)
        count = 0
        left = 0
        right = 0
        product = 1

        while right < n:
            product *= nums[right]
            right += 1
            while product >= k and left < n - 1:
                if left == right - 1:
                    left += 1
                    right += 1
                    product = nums[left]
                else:
                    product = int(product / nums[left])
                    left += 1
            if product < k:
                count += right - left

        return count
