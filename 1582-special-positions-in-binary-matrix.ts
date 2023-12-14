function numSpecial(mat: number[][]): number {
  const m = mat.length
  const n = mat[0].length

  const rowCounts: number[] = Array(m).fill(0)
  const colCounts: number[] = Array(n).fill(0)

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        rowCounts[i]++
        colCounts[j]++
      }
    }
  }

  let count = 0

  for (let i = 0; i < m; i++) {
    if (rowCounts[i] !== 1) {
      continue
    }
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && colCounts[j] === 1) {
        count++
      }
    }
  }

  return count
}

// console.log(
//   numSpecial([
//     [1, 0, 0],
//     [0, 0, 1],
//     [1, 0, 0],
//   ])
// )

// console.log(numSpecial(([
//   [0, 0, 0, 1],
//   [1, 0, 0, 0],
//   [0, 1, 1, 0],
//   [0, 0, 0, 0],
// ]))
