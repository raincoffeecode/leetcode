class Heap<T> {
  private data: T[]
  private comparator: (a: T, b: T) => number

  constructor(comparator: (a: T, b: T) => number) {
    this.data = []
    this.comparator = comparator
  }

  size(): number {
    const { data } = this
    return data.length
  }

  peek(): T | null {
    const { data } = this
    return data.at(0) ?? null
  }

  pop(): T | null {
    const { data } = this
    if (data.length === 0) {
      return null
    }
    if (data.length === 1) {
      return data.pop()!
    }
    const removeItem = data[0]
    data[0] = data.pop()!
    this.siftDown(0)
    return removeItem
  }

  push(item: T): void {
    const { data } = this
    data.push(item)
    this.siftUp(data.length - 1)
  }

  replace(item: T): T | null {
    const { data } = this
    if (data.length === 0) {
      throw new Error("Heap is empty.")
    }
    const removeItem = data[0]
    data[0] = item
    this.siftDown(0)
    return removeItem
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

  private getLeftChildIndex(index: number): number {
    return index * 2 + 1
  }

  private getRightChildIndex(index: number): number {
    return index * 2 + 2
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0
  }

  private hasLeftChild(index: number): boolean {
    const { data } = this
    return this.getLeftChildIndex(index) < data.length
  }

  private hasRightChild(index: number): boolean {
    const { data } = this
    return this.getRightChildIndex(index) < data.length
  }

  private leftChild(index: number): T {
    const { data } = this
    const leftChildIndex = this.getLeftChildIndex(index)
    return data[leftChildIndex]
  }

  private rightChild(index: number): T {
    const { data } = this
    const rightChildIndex = this.getRightChildIndex(index)
    return data[rightChildIndex]
  }

  private swap(index1: number, index2: number): void {
    const { data } = this
    const temp = data[index1]
    data[index1] = data[index2]
    data[index2] = temp
  }

  private siftUp(index: number): void {
    const { comparator, data } = this
    while (this.hasParent(index)) {
      const parentIndex = this.getParentIndex(index)
      if (comparator(data[index], data[parentIndex]) < 0) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        return
      }
    }
  }

  private siftDown(index: number): void {
    const { comparator, data } = this

    while (true) {
      // Finished sifting down if no more child nodes. Since tree is complete, no left
      // child means there is also no right child.
      if (!this.hasLeftChild(index)) {
        return
      }

      let minIndex = index

      if (comparator(data[index], this.leftChild(index)) > 0) {
        minIndex = this.getLeftChildIndex(index)
      }

      if (
        this.hasRightChild(index) &&
        comparator(data[minIndex], this.rightChild(index)) > 0
      ) {
        minIndex = this.getRightChildIndex(index)
      }

      if (index === minIndex) {
        return
      } else {
        this.swap(index, minIndex)
        index = minIndex
      }
    }
  }
}

// Examples: min and max heap with numbers as items.
const minHeap = new Heap((a: number, b: number) => a - b)
const maxHeap = new Heap((a: number, b: number) => b - a)

export default Heap
