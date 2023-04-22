const ONES = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

const SCALES = ["", "thousand", "million", "billion"]

const sayNumberInEnglish = n => {
  if (n < 0 || n > 999999999999) {
    throw new Error("Number out of range (0-999,999,999,999)")
  }

  if (n === 0) {
    return "zero"
  }

  if (n < 20) {
    return ONES[n]
  }

  if (n < 100) {
    const ones = n % 10
    const tens = Math.floor(n / 10)
    return TENS[tens] + (ones > 0 ? `-${ONES[ones]}` : "")
  }

  if (n < 1000) {
    const hundreds = Math.floor(n / 100)
    const remainder = n % 100
    return `${ONES[hundreds]} hundred${remainder > 0 ? ` ${sayNumberInEnglish(remainder)}` : ""}`
  }

  // break into chunks of thousands
  const chunks = []
  let remaining = n
  while (remaining > 0) {
    chunks.push(remaining % 1000)
    remaining = Math.floor(remaining / 1000)
  }

  // build the result
  let result = ""
  for (let i = chunks.length - 1; i >= 0; i--) {
    const chunk = chunks[i]
    if (chunk === 0) {
      continue
    }

    const scale = SCALES[i]
    const chunkStr = sayNumberInEnglish(chunk)
    result += `${chunkStr} ${scale} `
  }

  return result.trim()
}

module.exports = sayNumberInEnglish