const isPangram = input => {
  const lowercaseInput = input.toLowerCase()
  const letters = new Set()

  for (let i = 0; i < lowercaseInput.length; i++) {
    let char = lowercaseInput.charAt(i)
    if (/[a-z]/i.test(char)) {
      letters.add(char)
    }
  }

  return letters.size === 26
}

module.exports = isPangram
