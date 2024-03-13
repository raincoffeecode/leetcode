const MAX_N = 1000

const memo = Array.from({ length: MAX_N + 1 }, (_, n) => (n * n + n) / 2)

function pivotInteger(n: number): number {
  if (n === 1) {
    return 1
  }

  // Pivot can't be less than n / 2.
  let pivot = Math.ceil(n / 2)

  while (pivot <= n) {
    const leftSum = memo[pivot]
    const rightSum = memo[n] - memo[pivot - 1]
    const diff = rightSum - leftSum

    if (diff === 0) {
      return pivot
    }

    // Moving pivot right will only increaes the left side so we can stop checking.
    if (diff < 0) {
      return -1
    }

    pivot++
  }

  return -1
}

export {}
