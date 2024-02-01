function minPathSum(grid: number[][]): number {
  const m = grid.length
  const n = grid[0].length

  if (m <= 0 || n <= 0) {
    throw new Error("Invalid input.")
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const isLastRow = i === grid.length - 1
      const isLastCol = j === grid[0].length - 1

      if (isLastRow && isLastCol) {
        continue
      } else if (isLastRow) {
        grid[i][j] += grid[i][j + 1]
      } else if (isLastCol) {
        grid[i][j] += grid[i + 1][j]
      } else {
        grid[i][j] += Math.min(grid[i][j + 1], grid[i + 1][j])
      }
    }
  }
  return grid[0][0]
}
