function hey(message) {
  const trimmedMessage = message.trim()

  if (trimmedMessage === "") {
    return "Fine. Be that way!"
  }
  const isYelling = message === message.toUpperCase()
  const isQuestion = message.endsWith("?")

  if (isYelling && isQuestion) {
    return "Calm down, I know what I'm doing!"
  } else if (isYelling) {
    return "Whoa, chill out!"
  } else if (isQuestion) {
    return "Sure."
  } else {
    return "Whatever."
  }
}

module.exports = hey
