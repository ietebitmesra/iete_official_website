import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(undefined);

const decodeToken = (jwt) => {
  try {
    const [, payload] = jwt.split(".");
    return JSON.parse(atob(payload));
  } catch (err) {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const setSession = (jwtToken, userData) => {
    setToken(jwtToken);
    setUser(userData);
    if (jwtToken && userData) {
      localStorage.setItem(
        "auth",
        JSON.stringify({ token: jwtToken, user: userData })
      );
    } else {
      localStorage.removeItem("auth");
    }
  };

  const login = ({ email, role = "visitor" }) => {
    // Mock login: set a fake token and role; replace with real JWT flow later.
    const fakeToken = "mock-jwt-token";
    setSession(fakeToken, { email, role });
  };

  const logout = () => {
    setSession(null, null);
  };

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored);
      if (parsed.token) {
        const payload = decodeToken(parsed.token);
        const role = payload?.role || parsed.user?.role || "visitor";
        setToken(parsed.token);
        setUser({ email: parsed.user?.email, role });
      }
    } catch (err) {
      localStorage.removeItem("auth");
    }
  }, []);

  const value = useMemo(
    () => ({ user, token, login, logout, isAuthenticated: !!token }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};