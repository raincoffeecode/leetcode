// O(n + m + maxAbility) solution.
function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
  const n = difficulty.length
  const maxAbility = Math.max(...worker)
  const jobs = Array<number>(maxAbility + 1).fill(0)
  for (let i = 0; i < n; i++) {
    const d = difficulty[i]
    const p = profit[i]
    if (d <= maxAbility) {
      jobs[d] = Math.max(jobs[d], p)
    }
  }

  let max = 0
  for (let i = 1; i < jobs.length; i++) {
    if (jobs[i] < max) {
      jobs[i] = max
    }
    max = jobs[i]
  }

  let total = 0
  for (const w of worker) {
    total += jobs[w]
  }

  return total
}

// O(nlogn + mlogm) solution.
function maxProfitAssignment2(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
  const n = difficulty.length

  // A mapping of profit to its easiest job.
  const map = new Map<number, number>()

  for (let i = 0; i < n; i++) {
    const p = profit[i]
    const d = difficulty[i]
    map.set(p, Math.min(map.get(p) ?? Infinity, d))
  }

  // Sort descending.
  profit.sort((a, b) => b - a)
  worker.sort((a, b) => b - a)

  let total = 0
  let i = 0

  for (const p of profit) {
    const d = map.get(p)!
    while (i < n && worker[i] >= d) {
      total += p
      i++
    }
  }

  return total
}

maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
