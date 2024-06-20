export {}

class Solution {
  indexIntervals: number[]
  sum: number

  constructor(w: number[]) {
    const indexIntervals: number[] = []
    let sum = 0

    for (const weight of w) {
      sum += weight
      indexIntervals.push(sum)
    }

    this.indexIntervals = indexIntervals
    this.sum = sum
  }

  pickIndex(): number {
    const { indexIntervals, sum } = this
    const pick = Math.random() * sum
    let left = 0
    let right = indexIntervals.length - 1
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (pick > indexIntervals[mid]) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    return left
  }
}
