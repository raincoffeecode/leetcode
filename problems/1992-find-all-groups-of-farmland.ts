export {}

type Group = [number, number, number, number]

function findFarmland(land: number[][]): Group[] {
  const m = land.length
  const n = m > 0 ? land[0].length : 0
  const groups: Group[] = []

  const visited: boolean[][] = Array.from({ length: m }, () =>
    Array(n).fill(false)
  )

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] || land[i][j] === 0) {
        continue
      }
      let [r1, c1, r2, c2] = [i, j, i, j]

      // Find bottom edge.
      while (r2 + 1 < m && land[r2 + 1][j] === 1) {
        r2++
      }

      // Find right edge.
      while (c2 + 1 < n && land[i][c2 + 1] === 1) {
        c2++
      }

      groups.push([r1, c1, r2, c2])

      for (let k = r1; k <= r2; k++) {
        for (let l = c1; l <= c2; l++) {
          visited[k][l] = true
        }
      }
    }
  }

  return groups
}
