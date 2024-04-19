class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        m = len(grid)
        n = len(grid[0]) if m > 0 else 0
        visited = [[False] * n for _ in range(m)]
        count = 0

        for i in range(m):
            for j in range(n):
                if visited[i][j]:
                    continue

                is_land = grid[i][j] == "1"

                if is_land:
                    count += 1
                    cells = [(i, j)]
                    while cells:
                        (i2, j2) = cells.pop()
                        visited[i2][j2] = True
                        is_water = grid[i2][j2] == "0"
                        if is_water:
                            continue
                        if i2 > 0 and not visited[i2 - 1][j2]:
                            cells.append((i2 - 1, j2))
                        if i2 < m - 1 and not visited[i2 + 1][j2]:
                            cells.append((i2 + 1, j2))
                        if j2 > 0 and not visited[i2][j2 - 1]:
                            cells.append((i2, j2 - 1))
                        if j2 < n - 1 and not visited[i2][j2 + 1]:
                            cells.append((i2, j2 + 1))

        return count


Solution().numIslands(
    # [
    #     ["1", "1", "0", "0", "0"],
    #     ["1", "1", "0", "0", "0"],
    #     ["0", "0", "1", "0", "0"],
    #     ["0", "0", "0", "1", "1"],
    # ]
    [["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]]
)

[["1", "1", "1"], ["0", "1", "0"], ["1", "1", "1"]]
