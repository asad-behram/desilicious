export function isAuthenticated(): boolean {
  const token = localStorage.getItem("accessToken");
  return !!token; // Returns true if token exists, false otherwise
}

export function setSessionCookie(token: string) {
  document.cookie = `accessToken=${token}; path=/`;
}

export function isSessionCookiePresent() {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "accessToken") {
      return true;
    }
  }
  return false;
}

export function deleteCookie(cookieName: string) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
