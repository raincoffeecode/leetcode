function sortedSquares(nums: number[]): number[] {
  const results = Array(nums.length).fill(-1)
  let nextIndex = results.length - 1
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      results[nextIndex] = Math.pow(nums[left], 2)
      left++
    } else {
      results[nextIndex] = Math.pow(nums[right], 2)
      right--
    }
    nextIndex--
  }

  return results
}
