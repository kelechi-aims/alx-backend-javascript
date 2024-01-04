export default function handleResponseFromAPI(promise) {
  // Append three handlers to the promise
  promise
    .then(() => {
      // When the Promise resolves, return an object with the specified attributes
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      // When the Promise rejects, return an empty Error object
      console.error(error.message); // Log the error message
      return new Error();
    });
}
