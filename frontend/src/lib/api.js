// API client; add Authorization when token is present.
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export const withAuth = (token) => ({
  Authorization: token ? `Bearer ${token}` : undefined,
});

const handle = async (res, path) => {
  let data = {};
  try {
    data = await res.json();
  } catch (_) {
    /* ignore json parse */
  }
  if (!res.ok) {
    const msg = data?.message || `Request failed: ${path}`;
    throw new Error(msg);
  }
  return data;
};

export async function apiGet(path, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...withAuth(token),
    },
  });
  return handle(res, path);
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
  return handle(res, path);
}

export async function apiPatch(path, body, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...withAuth(token),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return handle(res, path);
}

export async function apiPut(path, body, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...withAuth(token),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return handle(res, path);
}
