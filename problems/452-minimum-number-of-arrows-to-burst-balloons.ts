type Point = number[]

function findMinArrowShots(points: Point[]): number {
  // Sort by start positions.
  points.sort((a, b) => a[0] - b[0])

  let currentRange: number | undefined
  let count = 0

  for (const point of points) {
    if (currentRange === undefined || point[0] > currentRange) {
      count++
      currentRange = point[1]
    } else {
      currentRange = Math.min(currentRange, point[1])
    }
  }

  return count
}
