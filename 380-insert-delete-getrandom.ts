/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

class RandomizedSet {
  private values: Map<number, boolean>

  constructor() {
    this.values = new Map()
  }

  insert(val: number): boolean {
    const { values } = this
    if (!values.has(val)) {
      values.set(val, true)
      return true
    } else {
      return false
    }
  }

  remove(val: number): boolean {
    const { values } = this
    if (values.has(val)) {
      values.delete(val)
      return true
    } else {
      return false
    }
  }

  getRandom(): number {
    const { values } = this
    const keys = [...values.keys()]
    const pick = Math.floor(Math.random() * keys.length)
    return keys[pick]
  }
}
