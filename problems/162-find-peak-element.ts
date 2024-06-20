// My attempt before looking at the Leetcode solution. O(log n) but a lot of unnecessary
// checks, turns out.
function findPeakElement1(nums: number[]): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const n = right - left + 1
    switch (n) {
      case 1:
        return left
      case 2:
        return nums[left] > nums[right] ? left : right
      default:
        const mid = Math.floor((left + right) / 2)
        const midIsPeak =
          (mid === 0 || nums[mid] > nums[mid - 1]) &&
          (mid === nums.length - 1 || nums[mid] > nums[mid + 1])

        if (midIsPeak) {
          return mid
        }

        if (nums[left] < nums[mid] && nums[mid] < nums[right]) {
          left = mid + 1
        } else if (nums[right] > nums[mid] && nums[mid] > nums[left]) {
          right = mid - 1
        } else {
          if (nums[mid - 1] > nums[mid]) {
            right = mid - 1
          } else {
            left = mid + 1
          }
        }
    }
  }

  throw new Error("Invalid input.")
}

// O(log n) solution based off of the Leetcode editorial.
function findPeakElement(nums: number[]): number {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] > nums[mid + 1]) {
      r = mid // mid can be the peak so keep it for consideration.
    } else {
      l = mid + 1
    }
  }
  return l
}

findPeakElement([1, 6, 5, 4, 3, 2, 1])
