function intersection(nums1: number[], nums2: number[]): number[] {
  const results: number[] = []
  const flags = Array(1001).fill(false)
  for (const num of nums1) {
    flags[num] = true
  }
  for (const num of nums2) {
    if (flags[num]) {
      results.push(num)
      flags[num] = false
    }
  }
  return results
}
