function getItemsMaxNumber(items) {
  let maxNumber = 0
  for (let item of items) {
    const matches = item?.name?.match(/\d+/g)
    const numbers = matches?.map(Number) || []
    maxNumber = Math.max(maxNumber, ...numbers)
  }

  return maxNumber
}

module.exports = getItemsMaxNumber
