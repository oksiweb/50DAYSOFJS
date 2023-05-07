function partial(fn, ...rest) {
  return function(...args){
      return fn(...rest, ...args)
  }
}

module.exports = partial
