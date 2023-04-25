const convertDigitsToAskedBase = (digits, baseA, baseB) => {
  let numberInBase10 = digits.reduce((accumulator, digit) => accumulator * baseA + digit, 0)

  const result = []
  while (numberInBase10 > 0) {
    result.unshift(numberInBase10 % baseB)
    numberInBase10 = Math.floor(numberInBase10 / baseB)
  }

  return result.length === 0 ? [0] : result
}

module.exports = convertDigitsToAskedBase
