function numSubarrayProductLessThanK(nums: number[], k: number): number {
  const n = nums.length
  let count = 0
  let left = 0
  let right = 0
  let product = 1

  while (right < n) {
    product *= nums[right]
    right++
    while (product >= k && left < n) {
      if (left === right - 1) {
        product = nums[right]
        left++
        right++
      } else {
        product /= nums[left]
        left++
      }
    }

    if (product < k) {
      count += right - left
    }
  }

  return count
}
