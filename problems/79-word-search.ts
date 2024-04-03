type Position = [number, number]

// Valid solution but very slow. There's likely a much more efficient algorithm..
function exist(board: string[][], word: string): boolean {
  const m = board.length
  const n = board[0].length

  // Frequency of each character in the target string.
  const wordCharFreq = [...word].reduce<{ [index: string]: number }>(
    (prev, cur) => {
      const count = prev[cur] ?? 0
      return { ...prev, [cur]: count + 1 }
    },
    {}
  )

  // Maping of letters to their positions on the board.
  const entries = new Map<string, Position[]>()

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const char = board[i][j]
      if (wordCharFreq.hasOwnProperty(char)) {
        if (!entries.has(char)) {
          entries.set(char, [])
        }
        entries.get(char)!.push([j, i])
      }
    }
  }

  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    const prevChar = i > 0 ? word[i - 1] : undefined
    const numCharsNeeded = wordCharFreq[char]
    const validPositions: Position[] = []

    if (numCharsNeeded > 1 || !prevChar) {
      validPositions.push(...(entries.get(char) ?? []))
    } else {
      for (const position of entries.get(char) ?? []) {
        for (const prevPosition of entries.get(prevChar) ?? []) {
          const minSteps =
            Math.abs(position[0] - prevPosition[0]) +
            Math.abs(position[1] - prevPosition[1])
          if (minSteps === 1) {
            validPositions.push(position)
            break
          }
        }
      }
    }

    if (validPositions.length < numCharsNeeded) {
      return false
    }

    entries.set(char, validPositions)
  }

  // Possible paths for valid entries.
  // Tuple contains state of current position, step, and visited nodes.
  const paths = (entries.get(word[0]) ?? []).map<
    [Position, number, { [index: string]: boolean }]
  >((position) => {
    const visited = { [position.join(":")]: true }
    return [position, 0, visited]
  })

  while (paths.length) {
    const [position, step, visited] = paths.pop()!

    // We have reached the end of the word so it's a match.
    if (step === word.length - 1) {
      return true
    }

    const char = word[step + 1]

    for (const nextPosition of entries.get(char) ?? []) {
      const minSteps =
        Math.abs(nextPosition[0] - position[0]) +
        Math.abs(nextPosition[1] - position[1])
      const key = nextPosition.join(":")
      if (minSteps === 1 && !visited[key]) {
        paths.push([nextPosition, step + 1, { ...visited, [key]: true }])
      }
    }
  }

  return false
}

exist(
  [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  "SEE"
)
