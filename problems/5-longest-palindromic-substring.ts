function longestPalindrome1(s: string): string {
  let longest = s.length ? s[0] : ""
  for (let i = 0.5; i < s.length - 0.5; i += 0.5) {
    let left = i % 1 === 0.5 ? i - 0.5 : i
    let right = i % 1 === 0.5 ? i + 0.5 : i
    while (s[left] === s[right]) {}
  }

  return ""
}

function longestPalindrome(s: string): string {
  let longestPalindrome = s.length ? s[0] : ""

  // Consider every substring starting from a center index. Can be half values because
  // a substring can be even or odd length.
  let center = 0.5
  while (center < s.length - 1) {
    const isHalf = center % 1 === 0.5

    // Find the first left/right pair that doesn't match.
    let left = isHalf ? center - 0.5 : center - 1
    let right = isHalf ? center + 0.5 : center + 1

    while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
      left--
      right++
    }

    if (longestPalindrome.length < right - left - 1) {
      longestPalindrome = s.substring(left + 1, right)
    }

    center += 0.5
  }

  return longestPalindrome
}
