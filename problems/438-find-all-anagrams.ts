function findAnagrams(s: string, p: string): number[] {
  if (!s.length || !p.length) {
    return []
  }

  // Construct a lookup table that contains all characters in `p` and their counts.
  const chars: { [index: string]: number } = {}
  for (const c of p) {
    chars[c] = c in chars ? chars[c] + 1 : 1
  }

  let validStart: number | undefined
  let validChars = { ...chars }
  const anagramIndexes: number[] = []

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    const valid = c in validChars && validChars[c] > 0
    const validButExhausted = c in validChars && validChars[c] === 0
    const invalid = !(c in validChars)

    if (valid) {
      validChars[c] -= 1
      validStart = validStart ?? i
    } else if (validButExhausted && validStart !== undefined) {
      // Adjust the `validStart` pointer accordingly. Set it to 1 index right of the
      // 1st occurence of the current character in the current valid range.
      for (let j = validStart; j < i; j++) {
        if (s[j] === c) {
          validStart = j + 1
          break
        } else if (s[j] in validChars) {
          validChars[s[j]] += 1
        }
      }
    } else if (invalid) {
      validChars = { ...chars }
      validStart = undefined
    }

    const validLength = validStart !== undefined ? i - validStart + 1 : 0
    const isValidAnagram = validLength === p.length

    if (isValidAnagram) {
      anagramIndexes.push(validStart!)
    }
  }

  return anagramIndexes
}

// console.log(findAnagrams("cbaebabacd", "abc"))
// console.log(findAnagrams("baa", "aa"))
console.log(findAnagrams("abacbabc", "abc"))
