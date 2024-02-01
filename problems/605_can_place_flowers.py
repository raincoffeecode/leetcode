class Solution:
    def canPlaceFlowers(self, flowerbeds: list[int], n: int) -> bool:
        i = 0
        num_plantable = 0

        while i < len(flowerbeds):
            pre_clear = i == 0 or flowerbeds[i - 1] == 0
            clear = flowerbeds[i] == 0
            post_clear = i == len(flowerbeds) - 1 or flowerbeds[i + 1] == 0
            is_plantable = pre_clear and clear and post_clear

            if is_plantable:
                num_plantable += 1

            if not post_clear:
                i += 3
            elif not clear or is_plantable:
                i += 2
            else:
                i += 1

        return num_plantable >= n
