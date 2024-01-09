// Creates and export a WeakMap to track the number of queries for each endpoint
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // Check if the weakMap has an entry for the given endpoint
  if (!weakMap.has(endpoint)) {
    // If not, set the initial count to 1
    weakMap.set(endpoint, 1);
  } else {
    // If yes, increment the count
    const count = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, count);

    // Check if the count is >= 5, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}
