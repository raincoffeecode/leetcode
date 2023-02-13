function jump(nums: number[]): number {
  const n = nums.length
  if (n <= 1) {
    return 0
  }

  let jumps = 0
  let position = 0

  while (position + nums[position] < n - 1) {
    if (nums[position] === 0) {
      throw new Error("Unexpected error. Ended up on 0 jump index.")
    }

    let currentRange = position + nums[position]
    let nextIndex = position
    let nextRange = position

    for (let i = position + 1; i <= currentRange; i++) {
      const range = i + nums[i]
      if (range >= nextRange) {
        nextIndex = i
        nextRange = range

        // Skip checking the rest if we know we can reach the end with the next jump.
        if (nextRange >= n - 1) {
          break
        }
      }
    }

    if (nextIndex === position) {
      throw new Error("Unexpected error. Stuck and not making progress.")
    }

    position = Math.min(nextIndex, n - 1)
    jumps += 1
  }

  return jumps + 1
}
