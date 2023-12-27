function minCost(colors: string, neededTime: number[]): number {
  const n = colors.length
  let totalCost = 0
  let i = 0

  while (i < n - 1) {
    const color = colors[i]
    const needsRemoval = color === colors[i + 1]

    if (!needsRemoval) {
      i++
    } else {
      let timeSum = neededTime[i] + neededTime[i + 1]
      let timeMax = Math.max(neededTime[i], neededTime[i + 1])
      let j = i + 2

      while (j < n) {
        if (colors[j] !== color) {
          break
        }
        timeSum += neededTime[j]
        timeMax = Math.max(timeMax, neededTime[j])
        j++
      }

      totalCost += timeSum - timeMax
      i = j
    }
  }

  return totalCost
}

minCost("bbbaaa", [4, 9, 3, 8, 8, 9])

// function minCost2(colors: string, neededTime: number[]): number {
//   const n = colors.length
//   let cost = 0
//   let currentColor = colors[0]
//   let currentColorMin = neededTime[0]
//   let currentColorCount = 1

//   for (let i = 0) {}

//   let prev: { color: string, min: number, count: number } = {
//     color: colors[0],
//     min: neededTime[0],
//     count: 1
//   }

//   for (let i = 1; i < n; i++) {
//     if (prev.color === colors[i]) {
//       prev.count++
//       prev.min = Math.max(prev.min, neededTime[i])
//     } else {
//       prev.color = colors[i]
//       prev.min = neededTime[i]
//       prev.count = 1
//     }

//     const isLast = i === n - 1
//     const nextColor = isLast ? undefined : colors[i + 1]
//     const needsRemoval = prev.color !== nextColor && prev.count >= 2
//     if (needsRemoval) {
//       cost += prev.min
//     }
//   }

//   for (let i = 1; i < colors.length; i++) {
//     const isNewColor = colors[i] !== currentColor
//     const needsRemoval = currentColorCount >= 2

//     if (isNewColor && needsRemoval) {
//       cost += currentColorMin
//     }

//     if (isNewColor) {
//       currentColorMin =
//       currentColorCount = 1
//     }

//     if (isNewColor) {
//       currentColorCount = 1
//     } else {
//       currentColorCount++
//     }

//   }

//   let i = 1
//   while (i < colors.length - 1) {
//     if (colors[i] === currentColor) {
//       currentMin = Math.min(currentMin, neededTime[i])
//     } else {

//     }
//   }

//   return 0
// }
