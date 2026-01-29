import React, { useEffect, useMemo, useState } from "react";
import { apiGet, apiPost } from "../lib/api";
import { useAuth } from "../context/AuthContext.jsx";

const initialFormState = {
  title: "",
  description: "",
  technologies: "",
  githubUrl: "",
  liveUrl: "",
};

const formatDate = (value) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const DashboardProjects = () => {
  const { token } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState(initialFormState);
  const [submitting, setSubmitting] = useState(false);

  const hasProjects = useMemo(() => projects.length > 0, [projects]);

  const fetchProjects = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await apiGet("/projects/mine", token);
      setProjects(data.projects || []);
    } catch (err) {
      setError(err.message || "Failed to fetch projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return;
    fetchProjects();
  }, [token]);

  const openModal = () => {
    setFormState(initialFormState);
    setError("");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (!formState.title.trim() || !formState.description.trim()) {
      setError("Title and description are required.");
      return;
    }

    const technologies = formState.technologies
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    setSubmitting(true);
    try {
      await apiPost(
        "/projects",
        {
          title: formState.title.trim(),
          description: formState.description.trim(),
          technologies,
          githubUrl: formState.githubUrl.trim() || undefined,
          liveUrl: formState.liveUrl.trim() || undefined,
        },
        token
      );
      closeModal();
      await fetchProjects();
    } catch (err) {
      setError(err.message || "Failed to submit project.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <header className="flex flex-col gap-2">
        <p className="text-sm text-white/55 uppercase tracking-widest">Dashboard</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">My Projects</h1>
            <p className="text-white/55">Manage your submitted projects and track approvals.</p>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="px-5 py-2 rounded-full bg-purple-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:bg-purple-400 transition"
          >
            Add Project
          </button>
        </div>
      </header>

      {loading && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
          Loading your projects...
        </div>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
          {error}
        </div>
      )}

      {!loading && !error && !hasProjects && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
          You have not submitted any projects yet.
        </div>
      )}

      {!loading && !error && hasProjects && (
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-12 gap-4 bg-white/5 px-6 py-3 text-xs uppercase tracking-wider text-white/55">
            <span className="col-span-6 sm:col-span-5">Title</span>
            <span className="col-span-3 sm:col-span-3">Status</span>
            <span className="col-span-3 sm:col-span-4 text-right">Created</span>
          </div>
          {projects.map((project) => {
            const statusLabel = project.status === "approved" ? "Approved" : "Pending";
            const statusClass =
              project.status === "approved"
                ? "bg-emerald-500/15 text-emerald-200"
                : "bg-amber-500/15 text-amber-200";

            return (
              <div
                key={project._id}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-white/10 text-sm"
              >
                <div className="col-span-6 sm:col-span-5">
                  <p className="font-semibold text-white">{project.title}</p>
                  <p className="text-xs text-white/50 line-clamp-2">{project.description}</p>
                </div>
                <div className="col-span-3 sm:col-span-3 flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClass}`}>
                    {statusLabel}
                  </span>
                </div>
                <div className="col-span-3 sm:col-span-4 text-right text-white/60">
                  {formatDate(project.createdAt)}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-10">
          <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#0c0f1a] p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Submit new project</h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm text-white/70 mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  value={formState.title}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
                  placeholder="Project title"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formState.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
                  placeholder="Describe your project"
                />
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2" htmlFor="technologies">
                  Technologies
                </label>
                <input
                  id="technologies"
                  name="technologies"
                  value={formState.technologies}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
                  placeholder="React, Node.js, MongoDB"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/70 mb-2" htmlFor="githubUrl">
                    GitHub URL
                  </label>
                  <input
                    id="githubUrl"
                    name="githubUrl"
                    value={formState.githubUrl}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
                    placeholder="https://github.com/"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2" htmlFor="liveUrl">
                    Live URL
                  </label>
                  <input
                    id="liveUrl"
                    name="liveUrl"
                    value={formState.liveUrl}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
                    placeholder="https://"
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-300">{error}</p>}

              <div className="flex flex-col sm:flex-row sm:justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-full border border-white/10 text-white/70 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 rounded-full bg-purple-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:bg-purple-400 transition disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Project"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default DashboardProjects;
