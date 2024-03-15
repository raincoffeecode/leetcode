class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        n = len(nums)
        results = [1] * n
        product = 1

        for i, num in enumerate(nums):
            results[i] *= product
            product *= num

        product = 1

        for i in range(n - 1, -1, -1):
            results[i] *= product
            product *= nums[i]

        return results
