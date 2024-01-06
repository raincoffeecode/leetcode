function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const m = nums1.length
  const n = nums2.length
  const total = m + n
  const isEven = total % 2 === 0
  let counter = isEven ? total / 2 - 1 : Math.floor(total / 2)
  let p1 = 0
  let p2 = 0

  while (counter > 0) {
    if (p1 >= m) {
      p2++
    } else if (p2 >= n) {
      p1++
    } else {
      if (nums1[p1] < nums2[p2]) {
        p1++
      } else {
        p2++
      }
    }
    counter--
  }

  // Grab 2 numbers from each of the pointers.
  // Handles case where either list of values is already fully consumed.
  // Need 2 numbers in case average is needed for even lengths.
  const range = [
    nums1.at(p1),
    nums1.at(p1 + 1),
    nums2.at(p2),
    nums2.at(p2 + 1),
  ].filter((num) => num !== undefined) as number[]

  const sorted = range.sort((a, b) => a - b)

  return isEven ? (sorted[0] + sorted[1]) / 2 : sorted[0]
}

findMedianSortedArrays([1, 2], [3, 4])
