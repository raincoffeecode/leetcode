export {}

type Operation = "+" | "-" | "*" | "/"

const operandMap = new Map([
  ["+", true],
  ["-", true],
  ["*", true],
  ["/", true],
])

function calculate(s: string): number {
  let number = 0
  let operation: Operation = "+"
  const stack: number[] = []

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    const isOperand = operandMap.has(c)
    if (isOperand) {
      operation = c as Operation
    } else {
      const digit = Number.parseInt(c)
      const isInteger = !Number.isNaN(digit)

      if (isInteger) {
        number = number * 10 + digit

        const isLastDigit =
          i === s.length - 1 || Number.isNaN(Number.parseInt(s[i + 1]))

        if (isLastDigit) {
          switch (operation) {
            case "+": {
              stack.push(number)
              break
            }
            case "-": {
              stack.push(-number)
              break
            }
            case "*": {
              const prev = stack.pop()!
              stack.push(prev * number)
              break
            }
            case "/": {
              const prev = stack.pop()!
              stack.push(Math.trunc(prev / number))
              break
            }
          }

          number = 0
        }
      }
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0)
}

function calculate2(s: string): number {
  const tokens = tokenize(s)

  // First pass for multiplication and division.
  for (let i = 0; i < tokens.length; i++) {
    const multOrDiv = tokens[i] === "*" || tokens[i] === "/"
    if (multOrDiv) {
      let num1Index = i - 1
      let num2Index = i + 1
      while (!Number.isInteger(tokens[num1Index])) {
        num1Index--
      }
      while (!Number.isInteger(tokens[num2Index])) {
        num2Index++
      }
      const num1 = tokens[num1Index] as number
      const num2 = tokens[num2Index] as number
      const result = tokens[i] === "*" ? num1 * num2 : Math.floor(num1 / num2)

      // Update tokens array with results.
      tokens[i] = result
      tokens[num1Index] = ""
      tokens[num2Index] = ""
    }
  }

  // Second pass for addition and subtraction.
  for (let i = 0; i < tokens.length; i++) {
    const addOrSub = tokens[i] === "+" || tokens[i] === "-"
    if (addOrSub) {
      let num1Index = i - 1
      let num2Index = i + 1
      while (!Number.isInteger(tokens[num1Index])) {
        num1Index--
      }
      while (!Number.isInteger(tokens[num2Index])) {
        num2Index++
      }
      const num1 = tokens[num1Index] as number
      const num2 = tokens[num2Index] as number
      const result = tokens[i] === "+" ? num1 + num2 : num1 - num2

      // Update tokens array with results.
      tokens[i] = result
      tokens[num1Index] = ""
      tokens[num2Index] = ""
    }
  }

  // Find the lone remaining value and return it.
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (Number.isInteger(tokens[i])) {
      return tokens[i] as number
    }
  }

  throw new Error("Invalid input.")
}

function tokenize(s: string): (string | number)[] {
  const tokens: (string | number)[] = []
  let number = NaN

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case " ":
        break
      case "*":
      case "/":
      case "+":
      case "-":
        tokens.push(s[i])
        break
      default:
        const digit = Number.parseInt(s[i])
        const isInteger = Number.isInteger(digit)
        if (isInteger) {
          const digit = Number.parseInt(s[i])
          number = Number.isNaN(number) ? digit : number * 10 + digit

          const isLastDigit =
            i === s.length - 1 || !Number.isInteger(Number.parseInt(s[i + 1]))

          if (isLastDigit) {
            tokens.push(number)
            number = NaN
          }
        }
        break
    }
  }

  return tokens
}

calculate("14-3/2")
calculate(" 3+5 / 2 ")
