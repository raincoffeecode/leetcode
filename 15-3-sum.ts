function threeSum(nums: number[]): number[][] {
  const len = nums.length
  if (len < 3) {
    return []
  }

  // const sorted = [...nums].sort((a, b) => {
  //   if (a < b) {
  //     return -1
  //   } else if (a > b) {
  //     return 1
  //   } else {
  //     return 0
  //   }
  // })

  let validSets: Array<[number, number, number]> = []

  // Sort the input array. Assume this is allowable.
  nums.sort((a, b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  })

  for (let i = 0; i < len; i++) {
    const target = nums[i]

    // Skip duplicates.
    if (i > 0 && nums[i - 1] === target) {
      continue
    }

    // A 0 or positive number cannot sum to 0 with 2 other postiive numbers. So we can
    // stop checking we reach this point.
    if (target >= 0) {
      break
    }

    let j = i + 1
    let k = len - 1

    while (j < k) {
      // Skip duplicates on the left side.
      if (j > 0 && nums[j] === nums[j - 1]) {
        j += 1
        continue
      }

      // Skip duplicates on the right side.
      if (k < len - 1 && nums[k] === nums[k + 1]) {
        k -= 1
        continue
      }

      const sum = target + nums[j] + nums[k]

      if (sum === 0) {
        validSets.push([target, nums[j], nums[k]])
      } else if (sum < 0) {
        j += 1
      } else {
        k -= 1
      }
    }
  }

  return validSets
}
