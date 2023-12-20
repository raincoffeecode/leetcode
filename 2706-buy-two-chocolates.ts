function buyChoco(prices: number[], money: number): number {
  const lowestPrices = [prices[0], prices[1]].sort((a, b) => a - b)
  for (let i = 2; i < prices.length; i++) {
    if (prices[i] < lowestPrices[1]) {
      lowestPrices.splice(1, 1, prices[i])
      lowestPrices.sort((a, b) => a - b)
    }
  }
  const totalPrice = lowestPrices[0] + lowestPrices[1]
  if (money >= totalPrice) {
    return money - totalPrice
  } else {
    return money
  }
}

console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 62))
