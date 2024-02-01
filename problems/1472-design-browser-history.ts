class BrowserHistory {
  history: string[]
  currentIndex: number
  maxIndex: number

  constructor(homepage: string) {
    this.history = [homepage]
    this.currentIndex = 0
    this.maxIndex = 0
  }

  get currentPage(): string {
    const { currentIndex, maxIndex, history } = this
    if (currentIndex < 0 || currentIndex > maxIndex) {
      throw new Error("Unexpected error")
    }
    return history[currentIndex]
  }

  visit(url: string): void {
    const newIndex = this.currentIndex + 1
    this.currentIndex = newIndex
    this.history[newIndex] = url
    this.maxIndex = newIndex
  }

  back(steps: number): string {
    if (steps <= 0) {
      throw new Error("Invalid input.")
    }
    const newIndex = Math.max(0, this.currentIndex - steps)
    this.currentIndex = newIndex
    return this.currentPage
  }

  forward(steps: number): string {
    if (steps <= 0) {
      throw new Error("Invalid input.")
    }
    const newIndex = Math.min(this.maxIndex, this.currentIndex + steps)
    this.currentIndex = newIndex
    return this.currentPage
  }
}
