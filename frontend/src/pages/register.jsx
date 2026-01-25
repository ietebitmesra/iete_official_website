import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const user = await register({ name, email, password });
      navigate(user?.role === "admin" ? "/admin" : "/");
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto px-6 py-12 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em]">Auth</p>
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-[var(--muted)]">Registers via backend and logs you in; role defaults to visitor unless set server-side.</p>
      </header>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label className="text-sm text-[var(--muted)]">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-white focus:border-[var(--brand)] focus:outline-none"
            placeholder="Full name"
          />
        </div>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-white focus:border-[var(--brand)] focus:outline-none"
            placeholder="••••••••"
          />
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[var(--brand)] text-white py-3 font-semibold hover:opacity-90 transition disabled:opacity-60"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>
      </form>
    </section>
  );
};

export default Register;
