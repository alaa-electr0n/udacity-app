// Fetch the API key from the server
export default async function fetchApiKey() {
  try {
    const res = await fetch('/api-key');
    const data = await res.json();
    const apiKey = data.apiKey;
    return apiKey;
  } catch (error) {
    console.error('Failed to retrieve API key:', error);
  }
}
