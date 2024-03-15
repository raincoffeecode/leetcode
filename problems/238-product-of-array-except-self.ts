function productExceptSelf(nums: number[]): number[] {
  const result = Array(nums.length).fill(1)
  let product = 1

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    result[i] *= product
    product *= num
  }

  product = 1

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i]
    result[i] *= product
    product *= num
  }

  return result
}

// Initial attempt. This was exceeding the time limit when submitted on Leetcode.
function productExceptSelfOLD(nums: number[]): number[] {
  let product = 1
  let numZeros = 0
  let zeroIndex = -1

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === 0) {
      numZeros++
      zeroIndex = i
    } else {
      product *= num
    }
  }

  if (numZeros >= 1) {
    const results = Array(nums.length).fill(0)
    if (numZeros === 1) {
      results[zeroIndex] = product
    }
    return results
  }

  const results: number[] = []

  for (const num of nums) {
    let dividend = Math.abs(product)
    const divisor = Math.abs(num)
    let result = 0

    const isNegative = (product < 0 && num > 0) || (product > 0 && num < 0)

    if (divisor === 1) {
      result = dividend
    } else {
      while (dividend > 0) {
        result++
        dividend -= divisor
      }
    }

    results.push(isNegative ? -result : result)
  }
  return results
}

export {}
