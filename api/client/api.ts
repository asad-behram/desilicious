export async function authenticatedFetch(url: string, options?: any) {
  const appliedOptions = options || {};
  const appliedHeaders = appliedOptions.headers
    ? { ...appliedOptions.headers }
    : {};
  const authOptions = {
    ...appliedOptions,
    method: appliedOptions.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...appliedHeaders,
    },
  };
  const request = await fetch(url, authOptions);
  try {
    return await request.json();
  } catch (error) {
    console.error(error || "An unknown error occurred.");
  }
}
