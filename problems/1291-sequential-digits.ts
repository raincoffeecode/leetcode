function sequentialDigits(low: number, high: number): number[] {
  const results: number[] = []
  const lowNumDigits = `${low}`.length

  for (let i = 1; i <= 9; i++) {
    const maxNumDigits = 10 - i
    if (maxNumDigits < lowNumDigits) {
      continue
    }
    let value = i
    for (let j = i + 1; j <= 9; j++) {
      value = value * 10 + j
      const inRange = value >= low && value <= high
      const skipRest = value > high
      if (inRange) {
        results.push(value)
      }
      if (skipRest) {
        continue
      }
    }
  }

  results.sort((a, b) => a - b)
  return results
}
