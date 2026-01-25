import React, { useMemo, useState } from "react";
import projects from "../data/projects";

const categories = ["All", "Web", "IoT", "Embedded", "Robotics"];

const Projects = () => {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    if (category === "All") return projects;
    return projects.filter((p) => p.category === category);
  }, [category]);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em]">Projects</p>
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-[#6b7cff] to-[var(--glow)]">Showcase</h1>
        <p className="text-[var(--muted)]">Member submissions verified by admins. Filters switch to categories and tech later.</p>
      </header>

      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/70 p-6 backdrop-blur shadow-lg hover:-translate-y-1 hover:shadow-[var(--brand-soft)] transition"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-[var(--muted)] text-sm">{project.category} • {project.year}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-[var(--badge-bg)] text-xs text-[var(--muted)] uppercase">
                {project.tech[0]}
              </span>
            </div>
            <p className="text-sm text-[var(--muted)] mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tag) => (
                <span key={`${project.id}-${tag}`} className="px-3 py-1 rounded-full bg-[var(--pill)] text-xs text-[var(--muted)]">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-[var(--muted)] mb-4">Team: {project.team.join(", ")}</p>
            <div className="flex gap-3 text-sm">
              {project.github && (
                <a className="text-[var(--brand)] hover:underline" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {project.demo && (
                <a className="text-[var(--brand)] hover:underline" href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
