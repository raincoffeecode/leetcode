function firstMissingPositive(nums: number[]): number {
  const n = nums.length

  // First, "clear out" any non-positive values.
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1
    }
  }

  // Update the associated indexes to -1 for nums that exist.
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i])
    const inRange = num >= 1 && num <= n
    if (inRange && nums[num - 1] > 0) {
      nums[num - 1] *= -1
    }
  }

  // Check each index and return the 1st associated num that's missing.
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1
    }
  }

  // If all n entries were filled, it must mean that 1 - n all exist, therefore n + 1 is
  // the first missing entry.
  return n + 1
}
