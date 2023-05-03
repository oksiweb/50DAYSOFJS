const throttle = (fn, delay) => {
  let wait = false
  return function (...rest) {
    if (wait) {
      return
    }
    fn(...rest)
    wait = true
    setTimeout(() => {
      wait = false
    }, delay)
  }
}

module.exports = throttle
