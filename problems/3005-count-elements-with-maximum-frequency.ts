function maxFrequencyElements(nums: number[]): number {
  const frequencies = Array<number>(101).fill(0)
  for (const num of nums) {
    frequencies[num]++
  }
  const frequencyCounts = Array<number>(100).fill(0)
  for (const frequency of frequencies) {
    frequencyCounts[frequency] += frequency
  }
  for (let i = 100; i >= 1; i--) {
    if (frequencyCounts[i] > 0) {
      return frequencyCounts[i]
    }
  }
  throw new Error("Invalid input.")
}
