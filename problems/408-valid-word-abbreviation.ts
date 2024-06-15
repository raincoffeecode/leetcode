function validWordAbbreviation(word: string, abbr: string): boolean {
  let i = 0
  let j = 0
  let numPrefix = 0

  while (i < word.length && j < abbr.length) {
    const c = abbr[j]
    const isNumber = Number.isInteger(Number(c))

    if (isNumber) {
      const invalidNumber = c === "0" && numPrefix === 0
      if (invalidNumber) {
        return false
      }

      numPrefix = 10 * numPrefix + Number(c)

      if (j === abbr.length - 1 || !Number.isInteger(Number(abbr[j + 1]))) {
        i += numPrefix
        numPrefix = 0
      }
      j++
    } else {
      if (c !== word[i]) {
        return false
      }
      i++
      j++
    }
  }

  return i === word.length && j === abbr.length
}

validWordAbbreviation("internationalization", "i12iz4n")
