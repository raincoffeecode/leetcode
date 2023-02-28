function shipWithinDays(weights: number[], days: number): number {
  let max_weight = 0
  let total_weight = 0
  for (const weight of weights) {
    max_weight = Math.max(max_weight, weight)
    total_weight += weight
  }

  let left = max_weight
  let right = total_weight

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (canShipWithinDays(weights, mid, days)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

function canShipWithinDays(
  weights: number[],
  capacity: number,
  days: number
): boolean {
  let required_days = 1
  let current_load = 0
  for (const weight of weights) {
    current_load += weight
    if (current_load > capacity) {
      current_load = weight
      required_days += 1
      if (required_days > days) {
        return false
      }
    }
  }
  return true
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(shipWithinDays([3, 2, 2, 4, 1, 4], 3))
