function imageSmoother(image: number[][]): number[][] {
  const m = image.length
  const n = image[0].length

  // Initialize an m x n 0 filled 2-d array so as not to modify the original values.
  const image2 = Array.from({ length: m }, () => Array<number>(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const top = i === 0 ? i : i - 1
      const bottom = i === m - 1 ? i : i + 1
      const left = j === 0 ? j : j - 1
      const right = j === n - 1 ? j : j + 1

      const values: number[] = []

      for (let k = top; k <= bottom; k++) {
        for (let l = left; l <= right; l++) {
          values.push(image[k][l])
        }
      }

      const sum = values.reduce((acc, value) => acc + value)
      image2[i][j] = Math.floor(sum / values.length)
    }
  }

  return image2
}

console.log(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
)
