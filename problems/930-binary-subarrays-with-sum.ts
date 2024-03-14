function numSubarraysWithSum(nums: number[], goal: number): number {
  const freq = new Map<number, number>()
  let sum = 0
  let count = 0

  for (const num of nums) {
    sum += num
    const diff = sum - goal
    if (diff === 0) {
      count++
    }
    if (freq.has(diff)) {
      count += freq.get(diff)!
    }
    freq.set(sum, (freq.get(sum) ?? 0) + 1)
  }

  return count
}
