function averageWaitingTime(customers: [number, number][]): number {
  const n = customers.length
  if (n < 1) {
    return 0
  }

  let chefNextIdleTime = 0
  let waitsTotal = 0

  for (const [arrival, time] of customers) {
    waitsTotal += Math.max(0, chefNextIdleTime - arrival) + time
    chefNextIdleTime = Math.max(chefNextIdleTime, arrival) + time
  }

  return waitsTotal / n
}

averageWaitingTime([
  [1, 2],
  [2, 5],
  [4, 3],
])
