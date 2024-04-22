function checkValidString(s: string): boolean {
  const leftParens: number[] = []
  const star: number[] = []

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    switch (c) {
      case "(":
        leftParens.push(i)
        break
      case ")":
        if (leftParens.length) {
          leftParens.pop()
        } else if (star.length) {
          star.pop()
        } else {
          return false
        }
        break
      case "*":
        star.push(i)
        break
    }
  }

  while (leftParens.length) {
    const index = leftParens.pop()!
    while (true) {
      if (!star.length) {
        return false
      }
      if (star.pop()! > index) {
        break
      }
    }
  }

  return true
}

checkValidString("(((((*)))**")
