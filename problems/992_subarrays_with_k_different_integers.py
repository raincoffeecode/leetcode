class Solution:
    def subarraysWithKDistinct(self, nums: list[int], k: int) -> int:
        total_count = 0
        num_counts: dict[int, int] = {}
        left = 0
        current_count = 0

        for num in nums:
            count = num_counts.get(num, 0)
            if count == 0:
                k -= 1
            num_counts[num] = count + 1

            if k < 0:
                count2 = num_counts[nums[left]]
                if count2 == 1:
                    k += 1
                num_counts[nums[left]] -= 1
                left += 1
                current_count = 0

            if k == 0:
                while num_counts[nums[left]] > 1:
                    num_counts[nums[left]] -= 1
                    current_count += 1
                    left += 1
                total_count += current_count + 1

        return total_count
