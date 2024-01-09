export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const resultString = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const cleanedValues = value.substring(startString.length);

      if (cleanedValues && cleanedValues !== value) {
        resultString.push(cleanedValues);
      }
    }
  });
  return resultString.join('-');
}
