function maxProductDifference(nums: number[]): number {
  const n = nums.length
  const sorted = [...nums].sort((a, b) => a - b)
  return sorted[n - 1] * sorted[n - 2] - sorted[0] * sorted[1]
}

const result = maxProductDifference([1, 6, 7, 5, 2, 4, 10, 6, 4])
console.log(result)
