class Solution:
    def minReorder(self, n: int, connections: list[list[int]]) -> int:
        outgoing: list[list[int]] = [[] for _ in range(n)]
        incoming: list[list[int]] = [[] for _ in range(n)]
        processed = [False] * n

        for a, b in connections:
            outgoing[a].append(b)
            incoming[b].append(a)

        reorder_count = 0
        noops = incoming[0]
        need_reorders = outgoing[0]
        processed[0] = True

        while noops or need_reorders:
            city: int
            if noops:
                city = noops.pop(0)
            else:
                city = need_reorders.pop(0)
                reorder_count += 1

            processed[city] = True

            for city_incoming in incoming[city]:
                if not processed[city_incoming]:
                    noops.append(city_incoming)

            for city_outgoing in outgoing[city]:
                if not processed[city_outgoing]:
                    need_reorders.append(city_outgoing)

        return reorder_count


print(Solution().minReorder(5, [[1, 0], [1, 2], [3, 2], [3, 4]]))
