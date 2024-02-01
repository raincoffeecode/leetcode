function minimumTime(time: number[], totalTrips: number): number {
  if (!time.length || totalTrips <= 0) {
    throw new Error("Invalid input.")
  }

  let left = 1
  let right = Math.max(...time) * totalTrips

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (hasEnoughTime(mid, time, totalTrips)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

function hasEnoughTime(givenTime: number, time: number[], totalTrips: number) {
  let trips = 0
  for (const t of time) {
    if (t <= givenTime) {
      trips += Math.floor(givenTime / t)
      if (trips >= totalTrips) {
        return true
      }
    }
  }
  return false
}

console.log(minimumTime([5, 10, 10], 9))
