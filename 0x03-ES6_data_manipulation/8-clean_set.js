export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  /**
 * const filteredValues = [...set].filter((value) => value.startsWith(startString));

 * const cleanedValues = filteredValues.map((value) => value.substring(startString.length));
 * const resultString = cleanedValues.join('-');
 * return resultString;
 */
  const parts = [];
  set.forEach (function(value)) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
