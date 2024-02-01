function halvesAreAlike(s: string): boolean {
  let count1 = 0
  let count2 = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase()
    const isVowel = "aeiou".includes(char)
    if (isVowel) {
      const isFirstHalf = i < Math.ceil(s.length / 2)
      const isSecondHalf = i >= Math.floor(s.length / 2)
      if (isFirstHalf) {
        count1++
      }
      if (isSecondHalf) {
        count2++
      }
    }
  }

  return count1 === count2
}
