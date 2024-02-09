// const squares = Array.from(
//   { length: 10 },
//   (_, index) => (index + 1) * (index + 1)
// )

// Lagrange's four-square theorem: ever int can be represented as sum of 4 integer
// squares.
// Lagrange's three-square theorem: ever int can be represented as sum of 3 integer
// squares if and only if not of form n = 4^a

function numSquares(n: number): number {
  const dp = Array(n + 1)

  for (let i = 1; i <= n; i++) {
    const isSquare = Number.isInteger(Math.sqrt(i))
    if (isSquare) {
      dp[i] = 1
    } else {
      let min = Infinity
      for (let j = 1; j * j <= i; j++) {
        min = Math.min(min, dp[i - j * j] + 1)
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
