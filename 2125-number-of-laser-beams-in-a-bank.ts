function numberOfBeams(bank: string[]): number {
  let numBeams = 0
  let prevCount: number | undefined = undefined

  for (const floor of bank) {
    let count = 0
    for (const c of floor) {
      if (c === "1") {
        count++
      }
    }
    if (prevCount !== undefined) {
      numBeams += prevCount * count
    }
    if (count !== 0) {
      prevCount = count
    }
  }
  return numBeams
}
