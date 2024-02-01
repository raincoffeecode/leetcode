class Solution:
    def countSubarrays(self, nums: list[int], minK: int, maxK: int) -> int:
        count = 0
        bound_start: int | None = None
        prev_min: int | None = None
        prev_max: int | None = None

        for i, num in enumerate(nums):
            in_range = num >= minK and num <= maxK

            if not in_range:
                bound_start = None
                prev_min = None
                prev_max = None
                continue

            is_min = num == minK
            is_max = num == maxK

            if bound_start is None:
                bound_start = i

            if is_min:
                prev_min = i
            if is_max:
                prev_max = i

            if (
                in_range
                and bound_start is not None
                and prev_min is not None
                and prev_max is not None
            ):
                count += min(prev_min, prev_max) - bound_start + 1

        return count
