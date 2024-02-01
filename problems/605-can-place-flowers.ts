function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let index = 0
  let numPlantable = 0
  while (index < flowerbed.length) {
    const preClear = index === 0 || flowerbed[index - 1] === 0
    const curClear = flowerbed[index] === 0
    const postClear =
      index === flowerbed.length - 1 || flowerbed[index + 1] === 0
    const isPlantable = preClear && curClear && postClear

    if (isPlantable) {
      numPlantable++
    }

    // Skip ahead logic based on several factors. Used for Optimization but also for
    // correctness (i.e. if we're consuming the current space make sure it's accounted
    // for for the next space).
    if (!postClear) {
      index += 3
    } else if (!curClear || isPlantable) {
      index += 2
    } else {
      index += 1
    }
  }

  return numPlantable >= n
}
