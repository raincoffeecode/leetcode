function minDays(bloomDay: number[], m: number, k: number): number {
  const n = bloomDay.length

  // Do initial quick check to see if there are enough flowers.
  const sufficientFlowers = n >= m * k
  if (!sufficientFlowers) {
    return -1
  }

  // At this point, we know it's possible and will require between min and max days.
  let left = Math.min(...bloomDay)
  let right = Math.max(...bloomDay)
  let minDays = NaN

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const canMake = canMakeWithDays(bloomDay, m, k, mid)

    if (canMake) {
      minDays = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return minDays
}

function canMakeWithDays(
  bloomDay: number[],
  m: number,
  k: number,
  days: number
): boolean {
  let bouquets = 0
  let sequence = 0
  for (const day of bloomDay) {
    const canUse = day <= days
    if (canUse) {
      sequence++
      if (sequence === k) {
        sequence = 0
        bouquets++
      }
    } else {
      sequence = 0
    }
  }
  return bouquets >= m
}
