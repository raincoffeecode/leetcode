function minMovesToSeat(seats: number[], students: number[]) {
  const n = seats.length
  let moves = 0

  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)

  for (let i = 0; i < n; i++) {
    moves += Math.abs(seats[i] - students[i])
  }

  return moves
}
