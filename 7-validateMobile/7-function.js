function validateMobile(number) {
    return /^(\+91|0)?\s?\d{10}$/.test(number)
}

module.exports = validateMobile;


