// A mapping of a number to its english word 1-19.
const wordMap = new Map<number, string>(
  [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ].map((s, i) => [i + 1, s])
)

// A mapping of a tens digit number to its english word 20-90.
const wordMapTens = new Map<number, string>(
  [
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ].map((s, i) => [i + 2, s])
)

function numberToWords(num: number): string {
  const validInput = Number.isInteger(num) && num >= 0 && num < Math.pow(2, 31)
  if (!validInput) {
    throw new Error("Invalid input.")
  }
  if (num === 0) {
    return "Zero"
  }
  return helper(num)
}

function helper(num: number): string {
  // num: 0
  if (num === 0) {
    return ""
  }

  // num: 1-19
  if (num <= 19) {
    return wordMap.get(num)!
  }

  // num: 20-99
  if (num <= 99) {
    const tensDigit = Math.floor(num / 10)
    const s1 = wordMapTens.get(tensDigit)!
    const s2 = helper(num % 10)
    return s2 === "" ? s1 : `${s1} ${s2}`
  }

  // num: 100-999
  if (num <= 999) {
    const hundredsDigit = Math.floor(num / 100)
    const s1 = helper(hundredsDigit)
    const s2 = helper(num % 100)
    return s2 === "" ? `${s1} Hundred` : `${s1} Hundred ${s2}`
  }

  // num: 1000-999999
  if (num <= 999999) {
    const thousands = Math.floor(num / 1000)
    const s1 = helper(thousands)
    const s2 = helper(num % 1000)
    return s2 === "" ? `${s1} Thousand` : `${s1} Thousand ${s2}`
  }

  // num: millions
  if (num <= 999999999) {
    const millions = Math.floor(num / 1000000)
    const s1 = helper(millions)
    const s2 = helper(num % 1000000)
    return s2 === "" ? `${s1} Million` : `${s1} Million ${s2}`
  }

  // num: billions
  const billions = Math.floor(num / 1000000000)
  const s1 = helper(billions)
  const s2 = helper(num % 1000000000)
  return s2 === "" ? `${s1} Billion` : `${s1} Billion ${s2}`
}
