import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("visitor");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, role });
    navigate("/admin");
  };

  return (
    <section className="max-w-md mx-auto px-6 py-12 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em]">Auth</p>
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-[var(--muted)]">Email + password for now. Wire JWT backend later; Google OAuth to be added.</p>
      </header>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm text-[var(--muted)]">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-white focus:border-[var(--brand)] focus:outline-none"
            placeholder="you@bitmesra.ac.in"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-[var(--muted)]">Password</label>
          <input
            type="password"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-white focus:border-[var(--brand)] focus:outline-none"
            placeholder="••••••••"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-[var(--muted)]">Role (mock)</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-white focus:border-[var(--brand)] focus:outline-none"
          >
            <option value="visitor">Visitor</option>
            <option value="member">Member</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full rounded-xl bg-[var(--brand)] text-white py-3 font-semibold hover:opacity-90 transition"
        >
          Sign in (mock)
        </button>
      </form>
    </section>
  );
};

export default Login;
