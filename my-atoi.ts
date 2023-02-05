enum ReadState {
  LeadingWhiteSpace,
  Digits,
  Fraction,
}

function myAtoi(s: string): number {
  let index = 0
  let sum = 0
  let isNegative = false
  let readState = ReadState.LeadingWhiteSpace
  let fractionDigit = 1

  while (index < s.length) {
    const char = s[index]
    const parsed = parseInt(char)
    const isInteger = Number.isInteger(parsed)

    if (readState === ReadState.LeadingWhiteSpace) {
      switch (char) {
        case " ":
          break
        case "+":
          readState = ReadState.Digits
          break
        case "-":
          isNegative = true
          readState = ReadState.Digits
          break
        case ".":
          readState = ReadState.Fraction
          break
        default:
          if (isInteger) {
            readState = ReadState.Digits
            index -= 1 // Need to read this value again next iteration.
          } else {
            return isNegative && sum !== 0 ? -sum : sum
          }
      }
    } else if (readState === ReadState.Digits) {
      switch (char) {
        case ".":
          readState = ReadState.Fraction
          break
        default:
          if (!isInteger) {
            return isNegative && sum !== 0 ? -sum : sum
          }

          const exceedsRange =
            sum >= 214748365 ||
            (sum === 214748364 &&
              (parsed === 9 || (!isNegative && parsed === 8)))

          // Clamp values to range of -2^31 and (2^31)-1
          if (exceedsRange) {
            return isNegative ? -2147483648 : 2147483647
          }

          sum = sum * 10 + parsed
          break
      }
    } else if (readState === ReadState.Fraction) {
      if (!isInteger) {
        return isNegative && sum !== 0 ? -sum : sum
      }
      sum += parsed / Math.pow(10, fractionDigit)
      fractionDigit += 1
    } else {
      throw new Error("Invalid read state.")
    }

    index += 1
  }

  return isNegative && sum !== 0 ? -sum : sum
}

console.log(myAtoi("42 with words"))
console.log(myAtoi("   -42"))
console.log(myAtoi("4193 with words"))
