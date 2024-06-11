// non-decreasing order: short to tall, can be duplicate heights.

function heightChecker(heights: number[]): number {
  let mismatches = 0
  const expected = [...heights].sort((a, b) => a - b)
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      mismatches++
    }
  }
  return mismatches
}
