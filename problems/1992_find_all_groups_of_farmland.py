class Solution:
    def findFarmland(self, land: list[list[int]]) -> list[list[int]]:
        m = len(land)
        n = len(land[0]) if m else 0
        visited = [[False] * n for _ in range(m)]
        groups: list[list[int]] = []

        for i in range(m):
            for j in range(n):
                if visited[i][j] or land[i][j] == 0:
                    continue
                r1 = i
                c1 = j
                r2 = i
                c2 = j

                # Determine bottom edge.
                while r2 + 1 < m and land[r2 + 1][j] == 1:
                    r2 += 1

                # Determine right edge.
                while c2 + 1 < n and land[i][c2 + 1] == 1:
                    c2 += 1

                groups.append([r1, c1, r2, c2])

                for k in range(r1, r2 + 1):
                    for k2 in range(c1, c2 + 1):
                        visited[k][k2] = True

        return groups


Solution().findFarmland([[1, 0, 0], [0, 1, 1], [0, 1, 1]])
