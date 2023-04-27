const longestConsecutiveSequence = inputArray => {
  let set = new Set(inputArray);
  let maxConsecutiveSequence = 0;
  let count = 1
  for(let i=0; i< inputArray.length; i++){
    let element = inputArray[i];
    while(set.has(element+1)){
      count++
      element++
    }
    maxConsecutiveSequence = Math.max(maxConsecutiveSequence, count)
    count = 1
  }
  return maxConsecutiveSequence;
}

module.exports = longestConsecutiveSequence
