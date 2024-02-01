function removeDuplicates(nums: number[]): number {
  if (!nums.length) {
    return 0
  }

  let p1 = 1
  let p2 = 1

  while (p2 < nums.length) {
    if (nums[p1 - 1] === nums[p2]) {
      p2 += 1
    } else {
      nums[p1] = nums[p2]
      p1 += 1
      p2 += 1
    }
  }

  return p1
}
