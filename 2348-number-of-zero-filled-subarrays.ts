function zeroFilledSubarray(nums: number[]): number {
  let count = 0
  let index = 0
  while (index < nums.length) {
    if (nums[index] === 0) {
      const zeroStart = index
      let zeroEnd = nums.length
      for (let j = zeroStart + 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
          zeroEnd = j
          break
        }
      }
      const n = zeroEnd - zeroStart
      count += (n * (n + 1)) / 2
      index = zeroEnd + 1
    } else {
      index++
    }
  }
  return count
}
