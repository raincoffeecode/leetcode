function plusOne(digits: number[]): number[] {
  let arr1 = [...digits]
  let increment = true

  for (let i = arr1.length - 1; i >= 0; i--) {
    if (increment) {
      const n = arr1[i] + 1
      arr1[i] = n % 10
      increment = n === 10
    }
  }

  if (increment && arr1.length) {
    arr1.unshift(1)
  }

  return arr1
}
