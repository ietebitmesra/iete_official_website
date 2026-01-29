import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { apiGet } from "../lib/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await apiGet("/projects?status=approved");
        setProjects(data.projects || []);
      } catch (err) {
        setError(err.message || "Failed to fetch projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const hasProjects = useMemo(() => projects.length > 0, [projects]);

  const getTechStack = (project) => {
    if (Array.isArray(project.techStack)) return project.techStack;
    if (typeof project.technologies === "string") {
      return project.technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }
    return [];
  };

  const formatDate = (value) => {
    if (!value) return null;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950/30 via-black to-blue-950/30">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-white/55 uppercase tracking-[0.2em]">Projects</p>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Showcase</h1>
            <p className="text-white/55">Member submissions verified by admins.</p>
          </div>
          <Link
            to="/projects/submit"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-purple-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:bg-purple-400 transition"
          >
            Showcase My Project
          </Link>
        </div>
      </header>

      {loading && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
          Loading projects...
        </div>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
          {error}
        </div>
      )}

      {!loading && !error && !hasProjects && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
          No projects available yet
        </div>
      )}

      {!loading && !error && hasProjects && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const techStack = getTechStack(project);
            const createdDate = formatDate(project.createdAt);

            return (
              <article
                key={project._id}
                className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-4"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  {project.owner?.name && (
                    <p className="text-xs text-white/50">By {project.owner.name}</p>
                  )}
                </div>

                <p className="text-sm text-white/70 line-clamp-3">{project.description}</p>

                {techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tag) => (
                      <span
                        key={`${project._id}-${tag}`}
                        className="rounded-full bg-white/10 text-xs px-2 py-1 text-white/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 text-xs">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-full border border-white/10 text-white/70 hover:text-white"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1 rounded-full border border-white/10 text-white/70 hover:text-white"
                    >
                      Live
                    </a>
                  )}
                </div>

                {createdDate && (
                  <p className="text-xs text-white/50">Created {createdDate}</p>
                )}
              </article>
            );
          })}
        </div>
      )}
      </div>
    </section>
  );
};

export default Projects;
