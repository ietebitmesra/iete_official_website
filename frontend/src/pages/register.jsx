import React from "react";

const Register = () => {
  return (
    <section className="max-w-md mx-auto px-6 py-12 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em]">Auth</p>
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-[var(--muted)]">Mock form; connect to JWT auth later. Role defaults to visitor until approved.</p>
      </header>
      <form className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm text-[var(--muted)]">Name</label>
          <input
            type="text"
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--panel)] px-4 py-3 text-white focus:border-[var(--brand)] focus:outline-none"
            placeholder="Full name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-[var(--muted)]">Email</label>
          <input
            type="email"
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
        <button
          type="button"
          className="w-full rounded-xl bg-[var(--brand)] text-white py-3 font-semibold hover:opacity-90 transition"
        >
          Sign up (mock)
        </button>
      </form>
    </section>
  );
};

export default Register;
