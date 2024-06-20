function maxDistance(position: number[], m: number): number {
  if (m > position.length) {
    throw new Error("Invalid input.")
  }

  // Sort in ascending order.
  position.sort((a, b) => a - b)

  // Left most and right most positions a ball can be placed in.
  const min = position[0]
  const max = position[position.length - 1]

  // Do a binary search for the max .
  let low = 1
  let high = Math.trunc((max - min) / (m - 1))
  let result = -1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (canFit(position, m, mid)) {
      result = mid
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return result
}

function canFit(position: number[], m: number, space: number): boolean {
  m--
  let i = 1
  let distance = 0

  while (m > 0) {
    if (i === position.length) {
      return false
    }
    distance += position[i] - position[i - 1]
    if (distance >= space) {
      m--
      distance = 0
    }
    i++
  }

  return true
}

// maxDistance([1, 2, 3, 4, 7], 3)
// maxDistance([5, 4, 3, 2, 1, 1000000000], 2)
maxDistance([79, 74, 57, 22], 4)
