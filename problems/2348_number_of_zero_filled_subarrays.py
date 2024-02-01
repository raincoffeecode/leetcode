class Solution:
    def zeroFilledSubarray(self, nums: list[int]) -> int:
        count = 0
        cur_len = 0
        for num in nums:
            if num == 0:
                cur_len += 1
                count += cur_len
            else:
                cur_len = 0
        return count
