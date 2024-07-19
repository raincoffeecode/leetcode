function luckyNumbers(grid: number[][]): number[] {
  const m = grid.length
  const n = grid[0].length
  const rowMins: number[] = Array(m).fill(Infinity)
  const colMaxes: number[] = Array(n).fill(-Infinity)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const num = grid[i][j]
      if (num < rowMins[i]) {
        rowMins[i] = num
      }
      if (num > colMaxes[j]) {
        colMaxes[j] = num
      }
    }
  }

  const rowMinsMap = new Map(rowMins.map((num) => [num, true]))
  const results: number[] = []

  for (const colMax of colMaxes) {
    if (rowMinsMap.has(colMax)) {
      results.push(colMax)
    }
  }

  return results
}

luckyNumbers([
  [3, 7, 8],
  [9, 11, 13],
  [15, 16, 17],
])
