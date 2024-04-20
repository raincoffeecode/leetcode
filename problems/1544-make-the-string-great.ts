function makeGood(s: string): string {
  let start = 0
  let startLength = 0

  do {
    startLength = s.length
    for (let i = start; i < s.length - 1; i++) {
      if (s[i].toLowerCase() === s[i + 1].toLowerCase() && s[i] !== s[i + 1]) {
        s = s.slice(0, i) + s.slice(i + 2)
        start = Math.max(0, i - 1)
        break
      }
    }
  } while (startLength !== s.length)

  return s
}

makeGood("abBAcC")
