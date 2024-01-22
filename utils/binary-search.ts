/**
 * Returns the index of the first occurrence of a value in an array, or -1 if it is not
 * present.
 * @param items The array to search.
 * @param searchElement The value to locate in the array.
 */
function binarySearchFirstMatch<T>(items: T[], searchElement: T): number {
  let left = 0
  let right = items.length - 1
  let result = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (items[mid] === searchElement) {
      result = mid
      right = mid - 1 // continue searching on the left side.
    } else if (items[mid] < searchElement) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return result
}

/**
 * Returns the index of a value in an array, or -1 if it is not present. There is no
 * guarantee which index will be returned if there is more than 1 of the search element.
 * @param items The array to search.
 * @param searchElement The value to locate in the array.
 */
function binarySearch<T>(items: T[], searchElement: T): number {
  let left = 0
  let right = items.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (items[mid] === searchElement) {
      return mid
    } else if (items[mid] < searchElement) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  // Element not found in the list.
  return -1
}

function binarySearchInsertIndex<T>(items: T[], searchElement: T): number {
  let left = 0
  let right = items.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (items[mid] === searchElement) {
      return mid
    } else if (items[mid] < searchElement) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return right + 1
}
