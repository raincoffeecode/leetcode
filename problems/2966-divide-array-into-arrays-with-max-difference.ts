function divideArray(nums: number[], k: number): number[][] {
  const n = nums.length
  nums.sort((a, b) => a - b)
  const arrays: number[][] = []
  for (let i = 0; i < n / 3; i++) {
    const start = i * 3
    const end = start + 3
    const values = nums.slice(start, end)
    if (values[2] - values[0] > k) {
      return []
    }
    arrays.push(values)
  }
  return arrays
}
