import React from "react";

const Dashboard = ({ user }) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-[var(--muted)]">
        Welcome{user?.name ? `, ${user.name}` : ""}.
      </p>
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-6">
        <p className="text-sm text-[var(--muted)]">Signed in as</p>
        <p className="text-lg font-semibold">
          {user?.email || user?.name || "Unknown user"}
        </p>
      </div>
    </section>
  );
};

export default Dashboard;
