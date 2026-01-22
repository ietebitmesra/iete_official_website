// Placeholder API client. Swap fetch base URL and add auth headers when backend is ready.
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export const withAuth = (token) => ({
  Authorization: token ? `Bearer ${token}` : undefined,
});

export async function apiGet(path, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...withAuth(token),
    },
  });
  if (!res.ok) throw new Error(`GET ${path} failed`);
  return res.json();
}

export async function apiPost(path, body, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...withAuth(token),
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`POST ${path} failed`);
  return res.json();
}
