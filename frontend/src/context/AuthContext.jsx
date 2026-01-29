import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { apiGet } from "../lib/api";

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
  const [loading, setLoading] = useState(true);

  const setSession = (jwtToken, userData) => {
    setToken(jwtToken);
    setUser(userData || null);
    if (jwtToken) {
      localStorage.setItem("token", jwtToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  const login = (userData, jwtToken) => {
    setSession(jwtToken, userData);
  };

  const logout = () => {
    setSession(null, null);
  };

  useEffect(() => {
    const initialize = async () => {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        setLoading(false);
        return;
      }

      setToken(storedToken);

      try {
        const data = await apiGet("/auth/me", storedToken);
        setUser(data.user || null);
      } catch (err) {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, []);

  const value = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
      isAuthenticated: !!token,
      loading,
    }),
    [user, token, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};