function findDuplicates(nums: number[]): number[] {
  let duplicates: number[] = []
  for (const num of nums) {
    const index = Math.abs(num) - 1
    const indexIsNegative = nums[index] < 0
    if (indexIsNegative) {
      duplicates.push(Math.abs(num))
    } else {
      nums[index] *= -1
    }
  }
  return duplicates
}
