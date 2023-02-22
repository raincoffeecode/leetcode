from heapq import heappush, heappop

Entry = tuple[int, list[int], bool]


class Solution:
    def shipWithinDays(self, weights: list[int], days: int) -> int:
        num_weights = len(weights)
        if num_weights <= 0 or days <= 0 or num_weights < days:
            raise Exception("Invalid input")

        max_weight = 0
        h: list[Entry] = []
        lookup: dict[int, list[Entry]] = {}

        # Determine initial max weight. Compile min heap of weight pairings and an
        # associated lookup table.
        for i in range(num_weights):
            max_weight = max(max_weight, weights[i])

            if i >= 1:
                combined_weight = weights[i - 1] + weights[i]
                indexes = [i - 1, i]
                entry: Entry = (combined_weight, indexes, False)
                lookup[i] = [entry]

                if (i - 1) in lookup:
                    lookup[i - 1].append(entry)
                else:
                    lookup[i - 1] = [entry]

                heappush(h, entry)

        to_remove = num_weights - days

        while to_remove > 0:
            entry = heappop(h)
            weight, indexes, expired = entry
            if not expired:
                to_remove -= 1
                max_weight = max(max_weight, weight)
                
                # Update the neighboring entries by cloning and marking old one as
                # expired.
                low = indexes[0]
                high = indexes[-1]

                lookup[low]

                updates = []
                if low >= 1:
                    updates.append(low)
                if high < num_weights - 1:
                    updates.append(high)



                for i in indexes:


        print(h)
        print(to_remove)

        while len(h):
            entry = heappop(h)
            print(entry[0])

        return max_weight


Solution().shipWithinDays([3, 2, 2, 4, 1, 4], 3)
