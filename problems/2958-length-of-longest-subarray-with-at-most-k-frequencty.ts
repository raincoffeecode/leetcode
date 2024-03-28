function maxSubarrayLength(nums: number[], k: number): number {
  let maxLength = 0
  const counts = new Map<number, number>()
  let left = 0

  for (let right = 0; right < nums.length; right++) {
    const num = nums[right]
    const count = counts.get(num) ?? 0
    counts.set(num, count + 1)
    if (count + 1 <= k) {
      maxLength = Math.max(maxLength, right - left + 1)
    } else {
      while (left <= right) {
        const num2 = nums[left]
        const count2 = counts.get(num2) ?? 0
        left++
        counts.set(num2, count2 - 1)
        if (num2 === num) {
          break
        }
      }
    }
  }

  return maxLength
}
