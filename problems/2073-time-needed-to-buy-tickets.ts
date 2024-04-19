function timeRequiredToBuy(tickets: number[], k: number) {
  let total = 0
  const kTime = tickets[k]
  for (let i = 0; i < tickets.length; i++) {
    if (i < k) {
      total += Math.min(tickets[i], kTime)
    } else if (i === k) {
      total += kTime
    } else {
      total += Math.min(kTime - 1, tickets[i])
    }
  }
  return total
}
