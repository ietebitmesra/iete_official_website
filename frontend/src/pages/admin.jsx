import React from "react";

const Admin = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em]">Admin</p>
        <h1 className="text-3xl font-bold">Dashboard (stub)</h1>
        <p className="text-[var(--muted)]">Protect this route with JWT later. Add moderation for projects, posts, resources, and users.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["Projects", "Posts", "Resources", "Users"].map((panel) => (
          <div
            key={panel}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/70 p-5 backdrop-blur shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{panel}</h3>
            <p className="text-[var(--muted)] text-sm">Pending review UI will go here.</p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-[var(--brand)] text-white text-sm">Open (mock)</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Admin;
