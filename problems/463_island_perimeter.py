class Solution:
    def islandPerimeter(self, grid: list[list[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        count = 0

        for i in range(m):
            for j in range(n):
                is_land = grid[i][j] == 1
                if is_land:
                    # Top,
                    if i == 0 or grid[i - 1][j] == 0:
                        count += 1

                    # Right.
                    if j == n - 1 or grid[i][j + 1] == 0:
                        count += 1

                    # Bottom.
                    if i == m - 1 or grid[i + 1][j] == 0:
                        count += 1

                    # Left.
                    if j == 0 or grid[i][j - 1] == 0:
                        count += 1

        return count
