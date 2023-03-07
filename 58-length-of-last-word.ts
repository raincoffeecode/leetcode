function lengthOfLastWord(s: string): number {
  let start = 0
  let end: number | undefined

  for (let i = s.length - 1; i >= 0; i--) {
    if (end === undefined && s[i] !== " ") {
      end = i
    } else if (end !== undefined && s[i] === " ") {
      start = i + 1
      break
    }
  }

  return end === undefined ? 0 : end - start + 1
}

;(() => {
  const testCases = [
    "Hello World",
    "   fly me   to   the moon  ",
    "luffy is still joyboy",
  ]

  testCases.forEach((tc) =>
    console.log(
      `\nInput: ${JSON.stringify(tc)}\nOutput: ${lengthOfLastWord(tc)}`
    )
  )
})()
