function countOdds(low: number, high: number): number {
  if (high < low) {
    return 0
  }
  const oddLow = low % 2 === 1
  const oddHigh = high % 2 === 1
  const extra = oddLow || oddHigh ? 1 : 0
  return Math.floor((high - low) / 2) + extra
}

for (let i = 0; i < 10; i++) {
  for (let j = i; j < 10; j++) {
    console.log(`coundOdds(${i}, ${j}) => ${countOdds(i, j)}`)
  }
}
