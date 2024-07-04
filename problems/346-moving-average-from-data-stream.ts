class MovingAverage {
  private nums: number[]
  private nextIndex: number
  private count: number
  private sum: number

  constructor(size: number) {
    this.nums = Array(size).fill(NaN)
    this.nextIndex = 0
    this.count = 0
    this.sum = 0
  }

  next(val: number): number {
    const { nums, nextIndex } = this

    if (this.count < nums.length) {
      this.count++
    } else {
      this.sum -= nums[nextIndex]
    }

    nums[nextIndex] = val
    this.sum += val

    this.nextIndex = (nextIndex + 1) % nums.length

    return this.sum / this.count
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
