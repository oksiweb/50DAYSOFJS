function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
    if (rangeStart > rangeEnd) {
        throw new Error('Invalid range: rangeStart must be less than rangeEnd');
    }
    let random = Math.floor(Math.random() * (rangeEnd - rangeStart) + rangeStart)
	return random
}

module.exports = randomNumberGeneratorInRange;