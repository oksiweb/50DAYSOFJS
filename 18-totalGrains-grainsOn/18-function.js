const totalGrains = () => {
  return (1n << 64n) - 1n
}

const grainsOn = input => {
  let result = 1
  for (let i = 1; i < input; i++) {
    result *= 2
  }

  return BigInt(result)
}

module.exports = { totalGrains, grainsOn }
