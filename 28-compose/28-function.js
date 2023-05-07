const compose = (...funcs) => {
  return arg => {
    return funcs.reduceRight((acc, fn) => {
      return fn(acc)
    }, arg)
  }
}

module.exports = compose
