// O(n^2) solution using a hash map.
function threeSum(nums: number[]): [number, number, number][] {
  const results: [number, number, number][] = []

  // Need to sort the list to avoid duplicate entries.
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 1; i++) {
    // Skip repat numbers to avoid duplicate entries in results.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    // If we reached a positive number there are no remaining negative numbers that can
    // be used to sum to 0.
    if (nums[i] > 0) {
      break
    }

    const seen = new Map<number, boolean>()

    for (let j = i + 1; j < nums.length; j++) {
      const numNeeded = -1 * (nums[i] + nums[j])

      if (seen.has(numNeeded)) {
        results.push([nums[i], nums[j], numNeeded])
        while (j + 1 < nums.length && nums[j + 1] === nums[j]) {
          j++
        }
      }

      seen.set(nums[j], true)
    }
  }

  return results
}

// O(n^2) solution using 2 pointers.
function threeSumTwoPointers(nums: number[]): [number, number, number][] {
  nums.sort((a, b) => a - b)

  const results: [number, number, number][] = []

  for (let i = 0; i < nums.length; i++) {
    // Skip repat numbers to avoid duplicate entries in results.
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    // If we reached a positive number there are no remaining negative numbers that can
    // be used to sum to 0.
    if (nums[i] > 0) {
      break
    }

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum === 0) {
        results.push([nums[i], nums[j], nums[k]])
        j++
        k--
        while (j < k && nums[j] === nums[j - 1]) {
          j++
        }
        while (k > j && nums[k] === nums[k + 1]) {
          k--
        }
      } else if (sum < 0) {
        j++
      } else {
        k--
      }
    }
  }

  return results
}

// Another O(n^2) 2 pointers solution I did initially in 2023.
function threeSumTwoPointers2023(
  nums: number[]
): Array<[number, number, number]> {
  const len = nums.length
  if (len < 3) {
    return []
  }

  const validSets: Array<[number, number, number]> = []

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

    // A positive number cannot sum to 0 with 2 other positive numbers wo we can
    // stop checking when we reach this point.
    if (target > 0) {
      break
    }

    let j = i + 1
    let k = len - 1

    while (j < k) {
      const sum = target + nums[j] + nums[k]

      if (sum < 0) {
        j += 1
      } else if (sum > 0) {
        k -= 1
      } else {
        validSets.push([target, nums[j], nums[k]])
        j += 1
        k -= 1
        while (j < k && nums[j] === nums[j - 1]) {
          j += 1
        }
      }
    }
  }

  return validSets
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
