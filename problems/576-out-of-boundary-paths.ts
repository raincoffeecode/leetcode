const M = Math.pow(10, 9) + 7

function findPaths(
  m: number,
  n: number,
  maxMoves: number,
  startRow: number,
  startColumn: number
) {
  let dp = Array.from({ length: m }, () => Array(n).fill(0))
  dp[startRow][startColumn] = 1

  let count = 0

  for (let move = 1; move <= maxMoves; move++) {
    const dp2 = Array.from({ length: m }, () => Array(n).fill(0))

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0) {
          count = (count + dp[i][j]) % M
        }
        if (i === m - 1) {
          count = (count + dp[i][j]) % M
        }
        if (j === 0) {
          count = (count + dp[i][j]) % M
        }
        if (j === n - 1) {
          count = (count + dp[i][j]) % M
        }

        if (i >= 1) {
          dp2[i][j] += dp[i - 1][j]
        }
        if (i <= m - 2) {
          dp2[i][j] += dp[i + 1][j]
        }
        if (j >= 1) {
          dp2[i][j] += dp[i][j - 1]
        }
        if (j <= n - 2) {
          dp2[i][j] += dp[i][j + 1]
        }
        dp[i][j] %= M
      }
    }

    dp = dp2
  }

  return count
}
