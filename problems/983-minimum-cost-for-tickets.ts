function mincostTickets(days: number[], costs: number[]): number {
  if (!days.length || costs.length !== 3) {
    throw new Error("Invalid input.")
  }

  const minCosts: number[] = Array(days.length)

  for (let i = 0; i < minCosts.length; i++) {
    // First index falling outside of 1-day range.
    const j = i - 1

    // First index falling outside of 7-day range.
    let k = j
    while (k >= 0 && days[i] - days[k] < 7) {
      k--
    }

    // First index falling outside of 30-day range.
    let l = k
    while (l >= 0 && days[i] - days[l] < 30) {
      l--
    }

    const cost1 = j >= 0 ? minCosts[j] + costs[0] : costs[0]
    const cost2 = k >= 0 ? minCosts[k] + costs[1] : costs[1]
    const cost3 = l >= 0 ? minCosts[l] + costs[2] : costs[2]

    minCosts[i] = Math.min(cost1, cost2, cost3)
  }

  return minCosts.at(-1)!
}
