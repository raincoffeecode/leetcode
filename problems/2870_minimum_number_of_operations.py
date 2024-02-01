from math import floor


class Solution:
    def minOperations(self, nums: list[int]) -> int:
        counts: dict[int, int] = {}
        for num in nums:
            count = counts.get(num, 0)
            counts[num] = count + 1
        operations = 0
        for count in counts.values():
            if count == 1:
                return -1
            match count % 3:
                case 0:
                    operations += floor(count / 3)
                case 1:
                    operations += floor(count / 3) + 1
                case 2:
                    operations += floor(count / 3) + 1
        return operations
