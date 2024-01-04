export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' })) // Resolve with an object on success
    .catch(() => new Error()) // Reject with an empty Error object on failure
    .finally(() => console.log('Got a response from the API')); // Log regardless of resolution or rejection
}
