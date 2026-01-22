import React, { useMemo, useState } from "react";
import leaderboard from "../data/leaderboard";

const Leaderboard = () => {
  const [category, setCategory] = useState("All");

  const entries = useMemo(() => {
    if (category === "All") return leaderboard.entries;
    return leaderboard.entries.filter((e) => e.category === category);
  }, [category]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em]">Leaderboard</p>
        <h1 className="text-3xl md:text-4xl font-bold">Monthly Highlights</h1>
        <p className="text-[var(--muted)]">Manual/mock data for now. Later wire Codeforces, GitHub, and custom metrics.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {leaderboard.highlights.map((highlight) => (
          <div
            key={highlight.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/70 p-4 shadow-lg backdrop-blur"
          >
            <p className="text-xs uppercase text-[var(--muted)] tracking-[0.2em] mb-1">{highlight.title}</p>
            <h3 className="text-xl font-semibold">{highlight.name}</h3>
            <p className="text-[var(--muted)] text-sm">{highlight.metric}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {["All", ...leaderboard.categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              category === cat
                ? "bg-[var(--brand)] text-white border-[var(--brand)]"
                : "border-[var(--border)] text-[var(--muted)] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-[var(--border)] overflow-hidden">
        <div className="grid grid-cols-4 bg-[var(--panel)] text-sm text-[var(--muted)] uppercase tracking-[0.1em] py-3 px-4">
          <span>Name</span>
          <span>Category</span>
          <span>Metric</span>
          <span className="text-right">Points</span>
        </div>
        {entries.map((row) => (
          <div
            key={`${row.name}-${row.category}`}
            className="grid grid-cols-4 items-center py-4 px-4 border-t border-[var(--border)] text-sm"
          >
            <span className="font-semibold">{row.name}</span>
            <span className="text-[var(--muted)]">{row.category}</span>
            <span className="text-[var(--muted)]">{row.metric}</span>
            <span className="text-right font-semibold text-[var(--brand)]">{row.points}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaderboard;
