function destCity(paths: string[][]): string {
  const originCities = new Set<string>()
  for (const path of paths) {
    originCities.add(path[0])
  }
  for (const path of paths) {
    if (!originCities.has(path[1])) {
      return path[1]
    }
  }
  throw new Error("Invalid input")
}
