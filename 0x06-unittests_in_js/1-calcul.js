function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
