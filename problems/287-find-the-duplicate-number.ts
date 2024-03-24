function findDuplicate(nums: number[]): number {
  const n = nums.length
  let left = 1
  let right = n - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    let count = 0
    for (const num of nums) {
      if (num <= mid) {
        count++
      }
    }
    if (count > mid) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}
