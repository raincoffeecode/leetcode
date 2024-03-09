function bagOfTokensScore(tokens: number[], power: number): number {
  let score = 0
  let maxScore = 0
  tokens.sort((a, b) => a - b)
  let p1 = 0
  let p2 = tokens.length - 1
  while (p1 <= p2) {
    if (power >= tokens[p1]) {
      power -= tokens[p1]
      p1++
      score++
      maxScore = Math.max(maxScore, score)
    } else if (score >= 1) {
      power += tokens[p2]
      p2--
      score--
    } else {
      break
    }
  }
  return maxScore
}
