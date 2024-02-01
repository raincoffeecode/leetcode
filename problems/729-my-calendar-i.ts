interface Event {
  start: number
  end: number
}

class MyCalendar {
  events: Event[]

  constructor() {
    this.events = []
  }

  book(start: number, end: number): boolean {
    const { events } = this
    const insertIndex = this.findInsertIndex(start, end)

    if (insertIndex === -1) {
      return false
    }

    // Determine the events that are immediately next to the insertion point.
    const prev = insertIndex >= 1 ? events[insertIndex - 1] : undefined
    const next = insertIndex < events.length ? events[insertIndex] : undefined

    // Ensure there are no collisions.
    if (prev && prev.end > start) {
      return false
    }
    if (next && end > next.start) {
      return false
    }

    // No conflict, update the list and return true.
    events.splice(insertIndex, 0, { start, end })
    return true
  }

  private findInsertIndex(start: number, end: number): number {
    const { events } = this
    let left = 0
    let right = events.length - 1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (events[mid].start === start) {
        return -1
      } else if (events[mid].start < start) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return right + 1
  }
}

const cal = new MyCalendar()
cal.book(10, 20)
cal.book(15, 25)
cal.book(20, 30)

export {}
