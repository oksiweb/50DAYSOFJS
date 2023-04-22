const fibonacci = (() => {
  const cache = {}

  const memoized = n => {
    if (n < 2) {
      return n
    }

    if (cache[n]) {
      return cache[n]
    }

    const result = memoized(n - 1) + memoized(n - 2)
    cache[n] = result
    return result
  }

  return memoized
})()

module.exports = fibonacci
