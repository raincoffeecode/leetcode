function isValid(s: string): boolean {
  const stack: string[] = []

  for (const c of s) {
    switch (c) {
      case "(":
      case "[":
      case "{":
        stack.push(c)
        break
      case ")":
      case "]":
      case "}":
        const popped = stack.pop()
        const invalidPair =
          (c === ")" && popped !== "(") ||
          (c === "]" && popped !== "[") ||
          (c === "}" && popped !== "{")

        if (invalidPair) {
          return false
        }
        break
      default:
        throw new Error(`Invalid character: ${c}`)
    }
  }

  return stack.length ? false : true
}

;(() => {
  const testCases = ["()"]
  testCases.forEach((tc) =>
    console.log(`\nInput: ${tc}\nOutput: ${isValid(tc)}`)
  )
})()
