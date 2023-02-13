function maxDistance(grid: number[][]): number {
  const n = grid.length
  const distances = Array.from({ length: n }, () => Array(n).fill(0))

  const MAX_DISTANCE = n + n + 1

  let containsLand = false
  let containsWater = false

  // Iterate left to right, top to bottom first. Reference top and left cells only since only those will be known for this pass.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const isWater = grid[i][j] === 0
      if (isWater) {
        const neighborDistances = []
        if (i >= 1) {
          neighborDistances.push(distances[i - 1][j])
        }
        if (j >= 1) {
          neighborDistances.push(distances[i][j - 1])
        }
        distances[i][j] = neighborDistances.length
          ? Math.min(...neighborDistances) + 1
          : MAX_DISTANCE
      }
      containsLand = !isWater || containsLand
      containsWater = isWater || containsWater
    }
  }

  let maxDistance = 0

  // Iterate right to left, bottom to top. Reference bottom and right cells to fill in for the remainding comparisons.
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const isWater = grid[i][j] === 0
      if (isWater) {
        const neighborDistances = []
        if (i <= n - 2) {
          neighborDistances.push(distances[i + 1][j])
        }
        if (j <= n - 2) {
          neighborDistances.push(distances[i][j + 1])
        }
        const distance = Math.min(distances[i][j] - 1, ...neighborDistances) + 1
        distances[i][j] = distance
        maxDistance = Math.max(maxDistance, distance)
      }
    }
  }

  return containsWater && containsLand ? maxDistance : -1
}

// maxDistance([
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1],
// ])

console.log(
  maxDistance([
    [0, 0, 1, 1, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
  ])
)
