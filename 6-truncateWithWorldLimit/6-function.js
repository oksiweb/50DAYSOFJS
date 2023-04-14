function truncateWithWordLimit(str, wordLimit) {
  if (typeof str !== 'string' || !str.trim() || typeof wordLimit !== 'number' || wordLimit <= 0) {
    return '';
  }

  return str.trim().split(" ").slice(0, wordLimit).join(' ');
}

module.exports = truncateWithWordLimit;
