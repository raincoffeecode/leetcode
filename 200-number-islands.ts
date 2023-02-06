function numIslands(grid: string[][]): number {
  const m = grid.length
  const n = grid[0]?.length ?? 0

  // m x n grid containg state of whether tile has been explored or not.
  const explored = Array.from({ length: m }, () => Array(n).fill(false))

  let numIslands = 0
  let i = 0
  let j = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // Skip if we have already looked at this tile.
      if (explored[i][j]) {
        continue
      }

      if (grid[i][j] === "1") {
        numIslands += 1

        let currentLandArea: Array<[number, number]> = [[i, j]]

        while (currentLandArea.length) {
          const [i, j] = currentLandArea.pop()!

          // Mark this tile as explored.
          explored[i][j] = true

          // If we reached water, we can stop exploring neighbor tiles.
          if (grid[i][j] === "0") {
            continue
          }

          const top = [i - 1, j]
          const right = [i, j + 1]
          const bottom = [i + 1, j]
          const left = [i, j - 1]

          for (const [i, j] of [top, right, bottom, left]) {
            if (i < 0 || i >= m || j < 0 || j >= n || explored[i][j]) {
              continue
            }
            currentLandArea.push([i, j])
          }
        }
      }
    }
  }

  return numIslands
}

const input = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]
const input2 = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
]

console.log(numIslands(input))
console.log(numIslands(input2))
