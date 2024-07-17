export {}

type Interval = [number, number]

function intervalIntersection(
  firstList: Interval[],
  secondList: Interval[]
): Interval[] {
  const n = firstList.length
  const m = secondList.length
  let i = 0
  let j = 0
  const results: Interval[] = []

  while (i < n && j < m) {
    const a = firstList[i]
    const b = secondList[j]

    if (a[1] < b[0]) {
      i++
    } else if (b[1] < a[0]) {
      j++
    } else {
      const overlap: Interval = [Math.max(a[0], b[0]), Math.min(a[1], b[1])]
      results.push(overlap)
      if (a[1] < b[1]) {
        i++
      } else {
        j++
      }
    }
  }

  return results
}

intervalIntersection(
  [
    [3, 5],
    [9, 20],
  ],
  [
    [4, 5],
    [7, 10],
    [11, 12],
    [14, 15],
    [16, 20],
  ]
)
