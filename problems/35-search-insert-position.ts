function searchInsert(nums: number[], target: number): number {
  if (!nums.length) {
    return 0
  }

  let a = 0
  let b = nums.length - 1

  while (a <= b) {
    const size = b - a + 1
    const mid = a + Math.trunc(size / 2)

    switch (size) {
      case 1:
        return target <= nums[a] ? a : a + 1
      default:
        if (target === nums[mid]) {
          return mid
        } else if (target < nums[mid]) {
          b = Math.min(mid, b - 1) // if size is 2, ensure we shrink by at least one.
        } else {
          a = mid
        }
    }
  }

  // It should not be possible to reach this point but throw an error as a safeguard.
  throw new Error("Unexpected error.")
}

;(() => {
  const testCases: Array<[number[], number]> = [
    [[1, 3, 5, 6], 5],
    [[1, 3, 5, 6], 2],
    [[1, 3, 5, 6], 7],
  ]

  testCases.forEach((tc, index) => {
    const [nums, target] = tc
    if (index > 0) {
      console.log("")
    }
    const s = `Input: ${nums} ${target}\nOutput: ${searchInsert(...tc)}`
    console.log(index === 0 ? s : `\n${s}`)
  })
})()
