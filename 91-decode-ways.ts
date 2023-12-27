const memo = new Map<string, number>()
for (let i = 1; i <= 10; i++) {
  memo.set(`0${i}`, 1)
  memo.set(`${i}`, 1)
}
for (let i = 11; i <= 26; i++) {
  memo.set(`${i}`, 2)
}
for (let i = 27; i <= 99; i++) {
  memo.set(`${i}`, 1)
}

function numDecodingsRecursive(s: string): number {
  if (!s.length) {
    return 0
  }
  if (memo.has(s)) {
    return memo.get(s)!
  }

  const value = s.length ? parseInt(s[0]) : undefined
  if (value === 0 && s.at(1) === "0") {
    return 0
  }
}

function numDecodings(s: string): number {
  if (s[0] === "0") {
    return 0
  }
  return numDecodingsRecursive(s)
  // if (!s.length) {
  //   return 0
  // }
  // if (memo.has(s)) {
  //   return memo.get(s)!
  // }

  // const value = s.length ? parseInt(s[0]) : undefined
  // if (value === 0) {

  // }

  // if (s.length <= 1) {
  //   const x =
  // }

  // let count = 1
  // for (let i = 0; i < s.length; i++) {
  //   const cur = parseInt(s[i])
  //   const next = i <= s.length - 2 ? parseInt(s[i - 1]) : undefined
  //   if (cur === 0 && i === 0) {
  //     return 0
  //   } else if (cur === 0) {

  //   }
  // }

  // for (let i = s.length - 1; i >= 0; i--) {
  //   const x = i >= 2 ? parseInt(s[i - 2]) : 0
  //   const y = i >= 1 ? parseInt(s[i - 1]) : 0
  //   const z = parseInt(s[i])
  //   const val = x * 100 + y * 10 + z

  //   // const left = i >= 1 ? parseInt(s[i - 1]) : 0
  //   // const right = parseInt(s[i])
  //   // const val = left * 10 + right
  //   // switch (val) {
  //   //   case 0:
  //   //     return 0
  //   //   case 1:
  //   //   case 2:
  //   //   case 3:
  //   // }
  // }

  // let i = s.length - 1
  // while (i >= 0) {
  //   const value = parseInt(s[i])
  //   const leftValue = i >= 1 ? parseInt(s[i - 1]) : undefined
  //   const groupable = leftValue !== undefined && leftValue * 10 + value <= 26
  //   const invalid = value === 0 && !groupable
  //   const hasToBeGrouped = value === 0 && groupable

  //   if (invalid) {
  //     return 0
  //   }

  //   if (hasToBeGrouped) {
  //     i -= 2
  //     continue
  //   }

  //   if (!groupable) {
  //     i -= 1
  //     continue
  //   }

  //   if (groupable) {
  //     count *= 2
  //   }

  //   i--
  // }
  // return count
}

console.log(numDecodings("12")) // 2
console.log(numDecodings("226")) // 3
console.log(numDecodings("06")) // 0
