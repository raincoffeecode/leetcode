// An inefficient O(n^2) solution using selection sort.
function sortColorsSelectionSort(nums: number[]): void {
  let target = 0

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === target) {
      continue
    }

    let swapped = false

    if (target === 0) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === 0) {
          nums[j] = nums[i]
          nums[i] = 0
          swapped = true
        }
      }

      if (!swapped) {
        target = 1
      }
    }

    if (target === 1) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === 1) {
          nums[j] = nums[i]
          nums[i] = 1
          swapped = true
        }
      }

      // We can stop checking if there are no 0's and 1's remaining.
      if (!swapped) {
        return
      }
    }
  }
}

// O(n) solution by counting the number of occurrences.
function sortColorsCount(nums: number[]): void {
  const counts = [0, 0, 0]

  // Count the occurrences of 0, 1, 2, respectively.
  for (const num of nums) {
    counts[num]++
  }

  // Overwrite each index with appropriate number of 0, 1, and 2's.
  for (let i = 0; i < nums.length; i++) {
    if (i < counts[0]) {
      nums[i] = 0
    } else if (i < counts[0] + counts[1]) {
      nums[i] = 1
    } else {
      nums[i] = 2
    }
  }
}

// Follow-up: one-pass solution with constant space.
function sortColors(nums: number[]): void {
  let p1 = 0
  let p2 = 0
  let p3 = nums.length - 1

  while (p2 <= p3) {
    if (nums[p1] === 0) {
      p1++
      p2 = Math.max(p2, p1)
    } else if (nums[p3] === 2) {
      p3--
    } else if (nums[p1] === 2) {
      nums[p1] = nums[p3]
      nums[p3] = 2
    } else if (nums[p3] === 0) {
      nums[p3] = nums[p1]
      nums[p1] = 0
    } else {
      // p1 and p3 is 1.
      switch (nums[p2]) {
        case 0:
          nums[p1] = 0
          nums[p2] = 1
          p1++
          p2++
          break
        case 1:
          p2++
          break
        case 2:
          nums[p2] = 1
          nums[p3] = 2
          p2++
          p3--
          break
      }
    }
  }
}

sortColors([2, 0, 1])
