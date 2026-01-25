import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiGet, apiPost } from "../lib/api.js";

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
  const [ready, setReady] = useState(false);

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

  const login = async ({ email, password }) => {
    const res = await apiPost("/auth/login", { email, password });
    const role = res?.user?.role || decodeToken(res.token)?.role || "visitor";
    setSession(res.token, { email: res?.user?.email, role, name: res?.user?.name });
    return res.user;
  };

  const register = async ({ name, email, password }) => {
    const res = await apiPost("/auth/register", { name, email, password });
    const role = res?.user?.role || decodeToken(res.token)?.role || "visitor";
    setSession(res.token, { email: res?.user?.email, role, name: res?.user?.name });
    return res.user;
  };

  const logout = () => {
    setSession(null, null);
  };

  useEffect(() => {
    const stored = localStorage.getItem("auth");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.token) {
          const payload = decodeToken(parsed.token);
          const role = payload?.role || parsed.user?.role || "visitor";
          setToken(parsed.token);
          setUser({ email: parsed.user?.email, role, name: parsed.user?.name });
        }
      } catch (err) {
        localStorage.removeItem("auth");
      }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    const validate = async () => {
      if (!token) return;
      try {
        const res = await apiGet("/auth/me", token);
        if (res?.user) setUser(res.user);
      } catch (err) {
        setSession(null, null);
      }
    };
    validate();
  }, [token]);

  const value = useMemo(
    () => ({ user, token, login, register, logout, isAuthenticated: !!token, ready }),
    [user, token, ready]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};