function subarraysWithKDistinct(nums: number[], k: number): number {
  let totalCount = 0
  let left = 0
  const numCounts = new Map<number, number>()
  let currentCount = 0

  for (const num of nums) {
    const numCount = numCounts.get(num) ?? 0
    if (numCount === 0) {
      k--
    }
    numCounts.set(num, numCount + 1)

    if (k < 0) {
      const num2 = nums[left]
      const num2Count = numCounts.get(num2)!
      if (num2Count === 1) {
        k++
      }
      left++
      numCounts.set(num2, num2Count - 1)
      currentCount = 0
    }

    if (k === 0) {
      while (numCounts.get(nums[left])! > 1) {
        numCounts.set(nums[left], numCounts.get(nums[left])! - 1)
        currentCount++
        left++
      }
      totalCount += currentCount + 1
    }
  }

  return totalCount
}
