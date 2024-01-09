export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const filteredValues = [...set].filter((value) => value.startsWith(startString));

  const cleanedValues = filteredValues.map((value) => value.substring(startString.length));
  const resultString = cleanedValues.join('-');
  return resultString;
}
