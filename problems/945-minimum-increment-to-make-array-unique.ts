function minIncrementForUnique(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let count = 0
  let prevNum = NaN
  for (const num of nums) {
    if (num <= prevNum) {
      count += 1 + prevNum - num
      prevNum++
    } else {
      prevNum = num
    }
  }
  return count
}

minIncrementForUnique([3, 2, 1, 2, 1, 7])
