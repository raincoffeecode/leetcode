class Solution:
    def minPathSum(self, grid: list[list[int]]) -> int:
        m = len(grid)
        n = len(grid[0]) if m > 0 else 0

        if m <= 0 or n <= 0:
            raise Exception("Invalid input.")

        for i in reversed(range(m)):
            for j in reversed(range(n)):
                is_last_row = i == m - 1
                is_last_col = j == n - 1

                if is_last_row and is_last_col:
                    continue
                elif is_last_row:
                    grid[i][j] += grid[i][j + 1]
                elif is_last_col:
                    grid[i][j] += grid[i + 1][j]
                else:
                    grid[i][j] += min(grid[i][j + 1], grid[i + 1][j])

        return grid[0][0]
