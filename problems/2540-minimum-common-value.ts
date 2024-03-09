function getCommon(nums1: number[], nums2: number[]): number {
  let p1 = 0
  let p2 = 0
  while (p1 < nums1.length && p2 < nums2.length) {
    const n1 = nums1[p1]
    const n2 = nums2[p2]

    if (n1 === n2) {
      return n1
    } else if (n1 < n2) {
      p1++
    } else {
      p2++
    }
  }
  return -1
}

export {}
