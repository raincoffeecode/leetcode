// [1,2,3] => 3: 1
// [1,2,3,4] => 4: 3 -> 2 + 1
// [1,2,3,4,5] => 5: 6 -> 3 + 2 + 1
// [1,2,3,4,5,6] => 6: 10 -> 4 + 3 + 2 + 1
// [1,2,3,4,5,6,7] => 7: 15 -> 5 + 4 + 3 + 2 + 1

function numberOfArithmeticSlices(nums: number[]): number {
  let count = 0
  let i = 0
  while (i < nums.length - 2) {
    const start = i
    const step = nums[start + 1] - nums[start]
    let stop = i + 2

    while (stop < nums.length) {
      const nextStep = nums[stop] - nums[stop - 1]
      if (step !== nextStep) {
        break
      } else {
        stop++
      }
    }

    const n = stop - start

    if (n >= 3) {
      count += triangularNumber(n - 2)
    }
    i = stop - 1
  }
  return count
}

function triangularNumber(n: number): number {
  if (n < 0) {
    throw new Error("Invalid input.")
  }
  switch (n) {
    case 0:
      return 0
    default:
      return (n * n + n) / 2
  }
}
