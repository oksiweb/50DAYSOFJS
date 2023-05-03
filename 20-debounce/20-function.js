const debounce = (fn, delay) => {
  let timer
  return function (...rest) {
    clearTimeout(timer)
    timer = setTimeout(() => fn.apply(null, rest), delay)
  }
}

module.exports = debounce
