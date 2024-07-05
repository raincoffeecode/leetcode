function nodesBetweenCriticalPoints(head: ListNode): [number, number] {
  let prev: ListNode | null = head
  let cur: ListNode | null = prev?.next ?? null
  let next: ListNode | null = cur?.next ?? null

  let firstCritical = -1
  let lastCritical = -1
  let minDistance = -1
  let index = 1

  while (cur) {
    const isCritical =
      prev &&
      cur &&
      next &&
      ((prev.val < cur.val && next.val < cur.val) ||
        (prev.val > cur.val && next.val > cur.val))

    if (isCritical) {
      if (firstCritical === -1) {
        firstCritical = index
      } else {
        const distance = index - lastCritical
        minDistance =
          minDistance === -1 ? distance : Math.min(minDistance, distance)
      }

      lastCritical = index
    }

    index++
    prev = cur
    cur = next
    next = next?.next ?? null
  }

  const maxDistance =
    lastCritical !== -1 && lastCritical !== firstCritical
      ? lastCritical - firstCritical
      : -1

  return [minDistance, maxDistance]
}
