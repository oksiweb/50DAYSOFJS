const memoize = fn => {
  let cache = new Map()
  return function (...rest) {
    let key = JSON.stringify(rest)
    if (cache.has(key)) {
      return cache.get(key)
    } else {
      let result = fn.apply(this, rest)
      cache.set(key, result)
      return result
    }
  }
}

module.exports = memoize
