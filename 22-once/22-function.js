const once = fn => {
  let req = false
  let result
  return function (...rest) {
    if (req) return result

    result = fn.apply(this, rest)
    req = true
    return result
  }
}

module.exports = once
