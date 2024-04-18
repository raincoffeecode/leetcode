function islandPerimeter(grid: number[][]): number {
  let count = 0
  const m = grid.length
  const n = grid[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const isLand = grid[i][j] === 1
      if (isLand) {
        // Top.
        if (i === 0 || grid[i - 1][j] === 0) {
          count++
        }

        // Right.
        if (j === n - 1 || grid[i][j + 1] === 0) {
          count++
        }

        // Bottom,
        if (i === m - 1 || grid[i + 1][j] === 0) {
          count++
        }

        // Left.
        if (j === 0 || grid[i][j - 1] === 0) {
          count++
        }
      }
    }
  }
  return count
}
