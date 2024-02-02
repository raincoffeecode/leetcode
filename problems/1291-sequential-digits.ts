function sequentialDigits(low: number, high: number): number[] {
  const results: number[] = []
  const minDigits = `${low}`.length
  const maxDigits = `${high}`.length

  for (let digits = minDigits; digits <= maxDigits; digits++) {
    for (let start = 1; start <= 10 - digits; start++) {
      const s = Array.from({ length: digits }, (_, i) => start + i).join("")
      const value = parseInt(s)
      if (value >= low && value <= high) {
        results.push(value)
      }

      if (value > high) {
        continue
      }
    }
  }

  return results
}
