export {}

class SparseVector {
  length: number
  nonZeroValues: Map<number, number>

  constructor(nums: number[]) {
    const nonZeroValues = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nonZeroValues.set(i, nums[i])
      }
    }

    this.length = nums.length
    this.nonZeroValues = nonZeroValues
  }

  dotProduct(vec: SparseVector): number {
    if (this.length !== vec.length) {
      throw new Error("Vector lengths do not match.")
    }
    let sum = 0
    const main = this.nonZeroValues.size < vec.nonZeroValues.size ? this : vec
    const other = main === this ? vec : this
    for (const [k, v] of main.nonZeroValues) {
      if (other.nonZeroValues.has(k)) {
        sum += v * other.nonZeroValues.get(k)!
      }
    }
    return sum
  }
}

const v1 = new SparseVector([1, 0, 0, 2, 3])
const v2 = new SparseVector([0, 3, 0, 4, 0])

v1.dotProduct(v2)
