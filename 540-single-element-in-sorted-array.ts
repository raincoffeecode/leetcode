/*

* We know the list size is odd
* We know the list is sorted and will contain positive numbers only
* We don't know how big of a jump from one number to the next

* Possible solution: First, find the median index using binary search, then, see if its pair is to the left or right. If it's right, . Actually, not even necessary for binary search, just use

*/
function singleNonDuplicate(nums: number[]): number {
  if (!nums.length) {
    throw new Error("List cannot be empty.")
  }

  let a = 0
  let b = nums.length - 1

  while (a <= b) {
    const size = b - a + 1

    switch (size) {
      case 1:
        return nums[a]
      default: {
        if (size % 2 === 0) {
          throw new Error("Unexpected error. Invalid input?")
        }
        const mid = a + Math.floor(size / 2)
        const pairToLeft = nums[mid] === nums[mid - 1]
        const pairToRight = nums[mid] === nums[mid + 1]

        // We found the single number if it doesn't match left or right.
        if (!pairToLeft && !pairToRight) {
          return nums[mid]
        }

        if (pairToLeft && pairToRight) {
          throw new Error("Invalid input. 3 or more of single number.")
        }

        // Determine if the halves after taking out the mid is even or odd.
        const halfIsEven = ((size - 1) / 2) % 2 === 0

        if (halfIsEven) {
          if (pairToLeft) {
            b = mid
          } else {
            a = mid
          }
        } else {
          if (pairToLeft) {
            a = mid + 1
          } else {
            b = mid - 1
          }
        }
      }
    }
  }

  throw new Error("Invalid input.")
}

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]))
// console.log(singleNonDuplicate(([3, 3, 7, 7, 10, 11, 11]))
