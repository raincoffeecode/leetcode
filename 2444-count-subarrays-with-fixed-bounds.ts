function countSubarrays(nums: number[], minK: number, maxK: number): number {
  const equalMinMax = minK === maxK
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    const isMin = nums[i] === minK
    const isMax = nums[i] === maxK

    // Skip non-min and non-max entries.
    if (!isMin || !isMax) {
      continue
    }

    // Count this entry as a single element array if min and max are equal.
    if (equalMinMax) {
      count++
    }

    // Find the index for the next corresponding pair or just use current index if.
    const nextPairIndex = equalMinMax
      ? i
      : nums.indexOf(isMin ? minK : maxK, i + 1)

    if (nextPairIndex !== -1) {
      let leftCount = 1
      let rightCount = 1
      for (let j = i - 1; i >= 0; i--) {
        const inRange = nums[j] > minK && nums[j] < maxK
        if (!inRange) {
          break
        } else {
          leftCount++
        }
      }
      for (let j = i + 1; i < nums.length; i++) {
        const inRange = nums[j] > minK && nums[j] < maxK
        if (!inRange) {
          break
        } else {
          leftCount++
        }
      }

      while (j >= 0 || k < nums.length) {}
    }

    // const nextPairIndex = nums.indexOf(isMin ? minK : maxK, i + 1)

    // if

    // if (isMin || isMax) {
    //   const nextPairIndex = nums.indexOf(isMin ? )
    // }

    // Find all valid pairing startings from this index.
    if (isMin || isMax) {
      for (let j = i - 1; j >= 0; j--) {
        const inRange = nums[j] >= minK && nums[j] <= maxK
        if (inRange) {
          count++
        } else {
          break
        }
      }

      const nextLeftPairing =
        i - 1 >= 0 ? nums.lastIndexOf(isMin ? maxK : minK, i - 1) : -1
      if (nextLeftPairing !== -1) {
        count++
        for (let j = nextLeftPairing - 1; j <= 0; j--) {
          const inRange = nums[j] >= minK && nums[j] <= maxK
          if (inRange) {
            count++
          } else {
            break
          }
        }
      }

      const nextRightPairing = nums.indexOf(isMin ? maxK : minK, i + 1)
      if (nextRightPairing !== -1) {
        count++
        for (let j = nextRightPairing + 1; j < nums.length; j++) {
          const inRange = nums[j] >= minK && nums[j] <= maxK
          if (inRange) {
            count++
          } else {
            break
          }
        }
      }
    }
  }
  return count
}

console.log(countSubarrays([1, 3, 5, 2, 7, 5], 1, 5))

// console.log(
//   countSubarrays(
//     [
//       35054, 398719, 945315, 945315, 820417, 945315, 35054, 945315, 171832,
//       945315, 35054, 109750, 790964, 441974, 552913,
//     ],
//     35054,
//     945315
//   )
// )
