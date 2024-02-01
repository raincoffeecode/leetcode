function removeElement(nums: number[], val: number): number {
  let a = 0
  let b = 0
  while (b < nums.length) {
    if (nums[b] === val) {
      b += 1
    } else {
      if (a !== b) {
        nums[a] = nums[b]
      }
      a += 1
      b += 1
    }
  }
  return a
}
