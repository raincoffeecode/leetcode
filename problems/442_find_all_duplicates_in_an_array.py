class Solution:
    def findDuplicates(self, nums: list[int]) -> list[int]:
        dups: list[int] = []
        for num in nums:
            index = abs(num) - 1
            index_is_negative = nums[index] < 0
            if index_is_negative:
                dups.append(abs(num))
            else:
                nums[index] *= -1
        return dups
