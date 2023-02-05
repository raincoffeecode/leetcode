function maxAreaInvalidOld(height: number[]): number {
  if (height.length < 2) {
    throw new Error("Must contain at least 2 entries.")
  }

  /* -------------------------------------------------------------------------------- */
  // 1. Determine the 2 tallest points in the list. Store their values and indexes.
  /* -------------------------------------------------------------------------------- */
  let maxHeights: [number | undefined, number | undefined] = [
    undefined,
    undefined,
  ]
  let maxHeightIndexes: [number[], number[]] = [[], []]

  for (let i = 0; i < height.length; i++) {
    const h = height[i]
    const max1 = maxHeights[1] ?? 0
    const max2 = maxHeights[0] ?? 0

    if (h > max1) {
      maxHeights = [max1, h]
      maxHeightIndexes = [maxHeightIndexes[1], [i]]
    } else if (h === max1) {
      maxHeightIndexes[1].push(i)
    } else if (h > max2) {
      maxHeights = [h, max1]
      maxHeightIndexes[0] = [i]
    } else if (h === max2) {
      maxHeightIndexes[0].push(i)
    }
  }

  let container: [number, number] = [0, 0]

  /* -------------------------------------------------------------------------------- */
  // 2. Determine the initial container position. If there are 2 or more of the highest
  // point, take the widest pair. If there is only 1, take the widest pair from the
  // tallest to the 2nd tallest.
  /* -------------------------------------------------------------------------------- */

  if (maxHeightIndexes[1].length >= 2) {
    container = [
      Math.min(...maxHeightIndexes[1]),
      Math.max(...maxHeightIndexes[1]),
    ]
  } else {
    let maxWidth = 0
    let maxWidthIndex = -1
    for (const index of maxHeightIndexes[0]) {
      const width = Math.abs(index - maxHeightIndexes[1][0])
      if (width > maxWidth) {
        maxWidth = width
        maxWidthIndex = index
      }
    }
    const indexes = [maxWidthIndex, maxHeightIndexes[1][0]]
    container = [Math.min(...indexes), Math.max(...indexes)]
  }

  /* -------------------------------------------------------------------------------- */
  // 3. Keep checking each side to see if expanding will increase the area until we've
  // reached the edges.
  /* -------------------------------------------------------------------------------- */
  let [cursorL, cursorR] = container
  let maxArea =
    Math.abs(container[0] - container[1]) *
    Math.min(height[container[0]], height[container[1]])

  while (true) {
    const heightL = height[container[0]]
    const heightR = height[container[1]]

    let area: number

    if (cursorL > 0 && (heightL <= heightR || cursorR >= height.length - 1)) {
      cursorL -= 1
      area =
        (container[1] - cursorL) *
        Math.min(height[cursorL], height[container[1]])
    } else if (cursorR < height.length - 1) {
      cursorR += 1
      area =
        (cursorR - container[0]) *
        Math.min(height[container[0]], height[cursorR])
    } else {
      break
    }

    // const area =
    //   (cursorR - cursorL) * Math.min(height[cursorL], height[cursorR])

    // console.log(
    //   JSON.stringify(
    //     {
    //       containerL: container[0],
    //       containerR: container[1],
    //       maxArea,
    //       cursorL,
    //       cursorR,
    //       area,
    //     },
    //     null,
    //     2
    //   )
    // )

    if (area > maxArea) {
      maxArea = area
      container = [cursorL, cursorR]
    }
  }

  return maxArea
}

function maxArea(height: number[]): number {
  if (height.length < 2) {
    throw new Error("Must contain at least 2 entries.")
  }
  let maxArea = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right])
    if (area > maxArea) {
      maxArea = area
    }
    if (height[left] <= height[right]) {
      left += 1
    } else {
      right -= 1
    }
  }
  return maxArea
}

const testCases = [
  [1, 8, 6, 2, 5, 4, 8, 3, 7],
  // [1, 1],
]

testCases.forEach((tc) =>
  console.log(`\nInput: ${JSON.stringify(tc)}\nOutput: ${maxArea(tc)}`)
)
