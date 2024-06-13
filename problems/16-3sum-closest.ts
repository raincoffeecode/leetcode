function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)

  let minDiffSum = NaN

  for (let i = 0; i < nums.length - 2; i++) {
    // Optimize by skipping duplicates.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    // Minor optimization, stop checking if previous number is positive and already
    // exceeds target.
    if (i > 0 && nums[i - 1] > 0 && nums[i - 1] > target) {
      break
    }

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      const diff = target - sum
      if (diff === 0) {
        return sum
      } else if (diff > 0) {
        j++
      } else {
        k--
      }

      const replace =
        Number.isNaN(minDiffSum) ||
        Math.abs(diff) < Math.abs(target - minDiffSum)

      if (replace) {
        minDiffSum = sum
      }
    }
  }

  return minDiffSum
}

threeSumClosest([-1, 2, 1, -4], 1)
threeSumClosest([-100, -98, -2, -1], -101)
