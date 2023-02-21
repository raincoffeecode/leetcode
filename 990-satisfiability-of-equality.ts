const LOWER_CASE_A_CHAR_CODE = "a".charCodeAt(0)

function equationsPossible(equations: string[]): boolean {
  const equals = equations.filter((eq) => eq[1] === "=")
  const notEquals = equations.filter((eq) => eq[1] === "!")
  const sets: Array<Set<number> | undefined> = Array(26)

  for (const eq of equals) {
    const i = eq[0].charCodeAt(0) - LOWER_CASE_A_CHAR_CODE
    const j = eq[3].charCodeAt(0) - LOWER_CASE_A_CHAR_CODE

    if (i === j) {
      continue
    }

    const set1 = sets[i]
    const set2 = sets[j]

    if (set1 && set2 && set1 !== set2) {
      set2.forEach((i) => set1.add(i))
      set1.forEach((i) => set2.add(i))
    } else if (!set1 && !set2) {
      const set = new Set([i, j])
      sets[i] = set
      sets[j] = set
    } else if (!set1 && set2) {
      set2.add(i)
      sets[i] = set2
    } else if (set1 && !set2) {
      set1.add(j)
      sets[j] = set1
    }
  }

  for (const neq of notEquals) {
    const i = neq[0].charCodeAt(0) - LOWER_CASE_A_CHAR_CODE
    const j = neq[3].charCodeAt(0) - LOWER_CASE_A_CHAR_CODE
    const set1 = sets[i]
    const set2 = sets[j]

    if (i === j) {
      return false
    }

    if ((set1 && set1.has(j)) || (set2 && set2.has(i))) {
      return false
    }
  }

  return true
}

equationsPossible(["a==b", "e==c", "b==c", "a!=e"])
