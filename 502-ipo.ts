function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  // Construct a capital
  const capitalWithIndex = capital
    .map<[number, number]>((profit, index) => [profit, index])
    .sort((a, b) => a[0] - b[0])

  return 0
}
