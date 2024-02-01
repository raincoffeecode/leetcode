class Group {
  private static minValidCharCode = "a".charCodeAt(0)
  private static maxValidCharCode = "z".charCodeAt(0)

  readonly char: string
  start?: number
  end?: number

  constructor(char: string, start?: number, end?: number) {
    if (char.length !== 1) {
      throw new Error("Character must be a length 1 string.")
    }
    const charCode = char.charCodeAt(0)
    if (
      charCode < Group.minValidCharCode ||
      charCode > Group.maxValidCharCode
    ) {
      throw new Error("Character must be lower-cased a-z.")
    }
    this.char = char
    this.start = start
    this.end = end
  }

  get length(): number {
    const { start, end } = this
    if (start === undefined || end === undefined || end < start) {
      return 0
    }
    return end - start + 1
  }
}

const VALID_CHARS = "abcdefghijklmnopqrstuvwxyz"

function distinctNames(ideas: string[]): number {
  const n = ideas.length

  // Sort the ideas list. Assume this is allowed.
  ideas.sort()

  const groups = [...VALID_CHARS].map((char) => new Group(char))
  const names: { [index: string]: true } = {}

  // Run through the list to mark the start and end indices for each character group.
  for (let i = 0; i < n; i++) {
    const idea = ideas[i]
    const char = idea.charAt(0)
    const charIndex = VALID_CHARS.indexOf(char)
    const group = groups[charIndex]
    if (group.start === undefined) {
      group.start = i
    }
    group.end = i
    names[idea] = true
  }

  const nonEmptyGroups = groups.filter((g) => g.length >= 1)

  let distinctNames = 0

  // For each pairing of the groups, determine the number of unique pairings.
  for (let i = 0; i < nonEmptyGroups.length; i++) {
    for (let j = i + 1; j < nonEmptyGroups.length; j++) {
      const group1 = nonEmptyGroups[i]
      const group2 = nonEmptyGroups[j]
      const group1Char = group1.char
      const group2Char = group2.char

      let group1ValidCounts = 0
      let group2ValidCounts = 0

      for (let k = group1.start!; k <= group1.end!; k++) {
        const s = `${group2Char}${ideas[k].slice(1)}`
        const isDuplicate = s in names
        if (!isDuplicate) {
          group1ValidCounts += 1
        }
      }

      for (let k = group2.start!; k <= group2.end!; k++) {
        const s = `${group1Char}${ideas[k].slice(1)}`
        const isDuplicate = s in names
        if (!isDuplicate) {
          group2ValidCounts += 1
        }
      }

      distinctNames += group1ValidCounts * group2ValidCounts * 2
    }
  }

  return distinctNames
}

console.log(distinctNames(["coffee", "donuts", "time", "toffee"]))
