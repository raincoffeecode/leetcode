function minDistance(word1: string, word2: string): number {
  if (!word1.length && !word2.length) {
    return 0
  }

  // Initialize a 2-d array. Word 1 for x-axis, word 2 for y-axis. Fill with 0's. Each
  // cell will represent the min distance for each corresponding word 1 to word 2 length
  // pair.
  const grid = Array.from({ length: word1.length + 1 }, () =>
    Array(word2.length + 1).fill(0)
  )

  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0) {
        grid[i][j] = j
      } else if (j === 0) {
        grid[i][j] = i
      } else {
        grid[i][j] =
          word1[i - 1] === word2[j - 1]
            ? grid[i - 1][j - 1]
            : 1 + Math.min(grid[i - 1][j - 1], grid[i][j - 1], grid[i - 1][j])
      }
    }
  }

  return grid[word1.length][word2.length]
}

minDistance("horse", "ros")
