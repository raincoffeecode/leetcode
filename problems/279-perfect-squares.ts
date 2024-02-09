// const squares = Array.from(
//   { length: 10 },
//   (_, index) => (index + 1) * (index + 1)
// )

function numSquares(n: number): number {
  const dp = Array(n + 1)

  for (let i = 1; i <= n; i++) {
    const isSquare = Number.isInteger(Math.sqrt(i))
    if (isSquare) {
      dp[i] = 1
    } else {
      let min = Infinity
      for (let j = i - 1; j >= 1; j--) {
        min = Math.min(min, dp[j] + dp[i - j])
        if (min === 2) {
          break
        }
      }
      dp[i] = min
    }
  }
  return dp[n]
}

export {}
