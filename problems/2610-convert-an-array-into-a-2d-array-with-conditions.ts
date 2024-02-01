function findMatrix(nums: number[]): number[][] {
  const matrix: number[][] = []

  // Number of entries for each number indexed at n - 1.
  const entries = Array<number>(200).fill(0)

  for (const num of nums) {
    entries[num - 1] += 1
  }

  for (let num = 1; num <= 200; num++) {
    const count = entries[num - 1]
    for (let i = 0; i < count; i++) {
      matrix[i] ??= []
      matrix[i].push(num)
    }
  }

  return matrix
}
