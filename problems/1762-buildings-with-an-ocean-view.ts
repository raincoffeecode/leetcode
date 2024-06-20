function findBuildings(heights: number[]): number[] {
  const results: number[] = []
  let max = 0

  for (let i = heights.length - 1; i >= 0; i--) {
    const h = heights[i]
    if (h > max) {
      results.push(i)
    }
    max = Math.max(max, h)
  }

  return results.reverse()
}
