// can delete 0 or 1 characters
function validPalindrome(s: string): boolean {
  const checks: [number, number, boolean][] = [[0, s.length - 1, true]]

  while (checks.length) {
    let [left, right, deleteAllowed] = checks.shift()!

    while (left < right) {
      if (s[left] === s[right]) {
        left++
        right--
      } else {
        if (deleteAllowed) {
          checks.push([left, right - 1, false], [left + 1, right, false])
        }
        break
      }
    }

    if (left >= right) {
      return true
    }
  }

  return false
}

validPalindrome("bddb")
