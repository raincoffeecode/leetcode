function maximumGain(s: string, x: number, y: number): number {
  let score = 0
  const highScore = x > y ? x : y
  const lowScore = x > y ? y : x
  const priority = x > y ? "ab" : "ba"
  let priorityCount = 0
  let otherCount = 0

  for (const c of s) {
    switch (c) {
      case priority[0]:
        priorityCount++
        break
      case priority[1]:
        if (priorityCount > 0) {
          priorityCount--
          score += highScore
        } else {
          otherCount++
        }
        break
      default:
        score += Math.min(priorityCount, otherCount) * lowScore
        priorityCount = 0
        otherCount = 0
        break
    }
  }

  score += Math.min(priorityCount, otherCount) * lowScore

  return score
}

// maximumGain("cdbcbbaaabab", 4, 5)
// "cdbcbbaaabab"  0
// "cdbcb  aabab"  5
// "cdbc    abab" 10
// "cdbc    a  b" 15
// "cdbc        " 19

// maximumGain("aabbaaxybbaabb", 5, 4)
// "aabbaaxybbaabb"
// "a  baaxybbaabb" 5
// "    aaxybbaabb" 10
// "    aaxybba  b" 15
// "    aaxybb    " 20

maximumGain("aabbabk", 1926, 4320)
