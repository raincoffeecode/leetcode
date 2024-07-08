// A non-optimal, O(n^2) solution.
function findTheWinnerNonOptimal(n: number, k: number): number {
  let index = 0
  const indexInPlay = Array(n).fill(true)

  function nextIndex(index: number, offset: number = 1): number {
    while (offset > 0) {
      index = (index + 1) % n
      if (indexInPlay[index]) {
        offset--
      }
    }
    return index
  }

  for (let round = 1; round < n; round++) {
    index = nextIndex(index, k - 1)
    indexInPlay[index] = false
    index = nextIndex(index)
  }

  // Convert 0 based index to 1...n.
  return index + 1
}

// Based off the Leetcode editorial optimal solution. O(n) runtime and O(1) space
// complexity.
function findTheWinner(n: number, k: number): number {
  let ans = 0
  for (let i = 2; i <= n; i++) {
    ans = (ans + k) % i
  }

  // Convert 0 based index to 1...n.
  return ans + 1
}

findTheWinner(5, 2)
