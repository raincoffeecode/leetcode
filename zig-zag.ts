enum Direction {
  Up,
  Down,
}

function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s
  }

  const rows = Array<string>(numRows).fill("")
  let index = 0
  let direction = Direction.Down
  for (const c of s) {
    rows[index] += c

    // Switch directions if we've reached the bottom or top.
    if (direction === Direction.Down && index === numRows - 1) {
      direction = Direction.Up
    } else if (direction === Direction.Up && index === 0) {
      direction = Direction.Down
    }

    index = direction === Direction.Down ? index + 1 : index - 1
  }
  // rows.forEach((r) => console.log(r))
  return rows.join("")
}

// console.log(convert("PAYPALISHIRING", 4))
