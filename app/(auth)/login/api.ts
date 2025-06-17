import { authenticatedFetch } from "@/api/client/api";

export async function login(email: string) {
  try {
    const response = await authenticatedFetch(`/api/signin`, {
      method: "POST",
      body: JSON.stringify({ email }),
    });
    return response;
  } catch (error) {
    console.error(error);
    return { success: false, error: "Login failed" };
  }
}
