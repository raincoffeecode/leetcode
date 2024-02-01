function countSubarrays(nums: number[], minK: number, maxK: number): number {
  let boundStart: number | undefined
  let prevMin: number | undefined
  let prevMax: number | undefined
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    const inRange = nums[i] >= minK && nums[i] <= maxK
    const isMin = nums[i] === minK
    const isMax = nums[i] === maxK

    // Reset all pointers if number not within min and max.
    if (!inRange) {
      boundStart = undefined
      prevMin = undefined
      prevMax = undefined
      continue
    }

    if (boundStart === undefined) {
      boundStart = i
    }

    if (isMin) {
      prevMin = i
    }

    if (isMax) {
      prevMax = i
    }

    if (prevMin !== undefined && prevMax !== undefined) {
      count += Math.min(prevMin, prevMax) - boundStart + 1
    }
  }

  return count
}

// console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5))

console.log(
  countSubarrays(
    [
      35054, 398719, 945315, 945315, 820417, 945315, 35054, 945315, 171832,
      945315, 35054, 109750, 790964, 441974, 552913,
    ],
    35054,
    945315
  )
)
