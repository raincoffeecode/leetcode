function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0))

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        dp[i][j] = matrix[i][j]
      } else {
        const prevSums = [dp[i - 1][j]]

        if (j >= 1) {
          prevSums.push(dp[i - 1][j - 1])
        }
        if (j <= n - 2) {
          prevSums.push(dp[i - 1][j + 1])
        }

        dp[i][j] = matrix[i][j] + Math.min(...prevSums)
      }
    }
  }

  return Math.min(...dp[n - 1])
}
