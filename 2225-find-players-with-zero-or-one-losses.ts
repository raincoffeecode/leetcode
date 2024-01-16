function findWinners(matches: number[][]): number[][] {
  const losses = new Map<number, number>()
  for (const [winner, loser] of matches) {
    if (!losses.has(winner)) {
      losses.set(winner, 0)
    }
    losses.set(loser, (losses.get(loser) ?? 0) + 1)
  }

  const undefeated: number[] = []
  const oneLosses: number[] = []

  for (const [player, count] of losses) {
    switch (count) {
      case 0:
        undefeated.push(player)
        break
      case 1:
        oneLosses.push(player)
        break
    }
  }

  undefeated.sort((a, b) => a - b)
  oneLosses.sort((a, b) => a - b)

  return [undefeated, oneLosses]
}
