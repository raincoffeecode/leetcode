function minDifference(nums: number[]): number {
  const n = nums.length
  if (n <= 4) {
    return 0
  }

  nums.sort((a, b) => a - b)

  let min = nums[0]
  let max = nums[n - 1]

  const diffs = [
    nums[3] - nums[0],
    nums[2] - nums[0] + (nums[n - 1] - nums[n - 2]),
    nums[1] - nums[0] + (nums[n - 1] - nums[n - 3]),
    nums[n - 1] - nums[n - 4],
  ]

  return max - min - Math.max(...diffs)
}

minDifference([5, 3, 2, 4])
