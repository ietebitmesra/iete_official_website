import React from "react";
import resources from "../data/resources";

const Resources = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em]">Resources</p>
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-[#6b7cff] to-[var(--glow)]">ECE / EEE Hub</h1>
        <p className="text-[var(--muted)]">Curated links for Embedded, VLSI, DSP, Controls, Comms, Robotics. Expandable later.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res) => (
          <article
            key={res.id}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/70 p-6 backdrop-blur shadow-lg hover:-translate-y-1 transition"
          >
            <p className="text-xs uppercase text-[var(--muted)] tracking-[0.2em] mb-1">{res.category}</p>
            <h3 className="text-xl font-semibold mb-1">{res.title}</h3>
            <p className="text-[var(--muted)] text-sm mb-3">{res.type}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {res.tags.map((tag) => (
                <span key={`${res.id}-${tag}`} className="px-3 py-1 rounded-full bg-[var(--pill)] text-xs text-[var(--muted)]">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={res.link}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--brand)] text-sm hover:underline"
            >
              Open resource →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Resources;
