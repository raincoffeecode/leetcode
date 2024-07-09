// O(log m of n) solution where n is num bottles and m is num exchange.
function numWaterBottles1(numBottles: number, numExchange: number) {
  let full = numBottles
  let empty = 0
  let consumed = 0

  while (full > 0) {
    consumed += full
    empty += full
    full = 0
    if (empty >= numExchange) {
      full = Math.trunc(empty / numExchange)
      empty %= numExchange
    }
  }

  return consumed
}
