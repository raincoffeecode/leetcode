function countSubarrays(nums: number[], k: number): number {
  let count = 0
  let max = Math.max(...nums)
  let maxCount = 0
  let start = 0

  for (let end = 0; end < nums.length; end++) {
    const num = nums[end]
    if (num === max) {
      maxCount++
    }
    while (maxCount >= k && start <= end) {
      if (nums[start] === max) {
        maxCount--
      }
      start++
    }
    count += start
  }

  return count
}

export {}
