import React, { useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiGet, apiPatch } from "../lib/api";
import { useAuth } from "../context/AuthContext.jsx";

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

const AdminProjects = () => {
  const { user, token } = useAuth();
  const [pendingProjects, setPendingProjects] = useState([]);
  const [approvedProjects, setApprovedProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  const isAdmin = user?.role === "admin";

  const fetchProjects = async () => {
    setLoading(true);
    setError("");
    try {
      const [pendingData, approvedData] = await Promise.all([
        apiGet("/projects?status=pending", token),
        apiGet("/projects?status=approved", token),
      ]);
      setPendingProjects(pendingData.projects || []);
      setApprovedProjects(approvedData.projects || []);
    } catch (err) {
      setError(err.message || "Failed to fetch projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token || !isAdmin) return;
    fetchProjects();
  }, [token, isAdmin]);

  const approveProject = async (projectId) => {
    setFeedback("");
    try {
      const result = await apiPatch(`/projects/${projectId}/approve`, null, token);
      const approvedProject = result.project;
      setPendingProjects((prev) => prev.filter((project) => project._id !== projectId));
      if (approvedProject) {
        setApprovedProjects((prev) => [approvedProject, ...prev]);
      } else {
        await fetchProjects();
      }
      setFeedback("Project approved successfully.");
    } catch (err) {
      setError(err.message || "Failed to approve project.");
    }
  };

  const currentList = useMemo(() => {
    return activeTab === "pending" ? pendingProjects : approvedProjects;
  }, [activeTab, pendingProjects, approvedProjects]);

  if (!isAdmin) return <Navigate to="/dashboard" replace />;

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-white/55 uppercase tracking-widest">Admin</p>
        <h1 className="text-3xl font-semibold">Project Moderation</h1>
        <p className="text-white/55">
          Review and approve submitted projects from members.
        </p>
      </header>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded-full border text-sm transition ${
            activeTab === "pending"
              ? "bg-yellow-500/20 text-yellow-200 border-yellow-500/40"
              : "border-white/10 text-white/60 hover:text-white"
          }`}
        >
          Pending Projects
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("approved")}
          className={`px-4 py-2 rounded-full border text-sm transition ${
            activeTab === "approved"
              ? "bg-emerald-500/20 text-emerald-200 border-emerald-500/40"
              : "border-white/10 text-white/60 hover:text-white"
          }`}
        >
          Approved Projects
        </button>
      </div>

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

      {!loading && feedback && (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-200">
          {feedback}
        </div>
      )}

      {!loading && !error && currentList.length === 0 && (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
          {activeTab === "pending" ? "No pending projects." : "No approved projects."}
        </div>
      )}

      {!loading && !error && currentList.length > 0 && (
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-12 gap-4 bg-white/5 px-6 py-3 text-xs uppercase tracking-wider text-white/55">
            <span className="col-span-4 sm:col-span-4">Title</span>
            <span className="col-span-3 sm:col-span-2">Owner</span>
            <span className="col-span-3 sm:col-span-3">Links</span>
            <span className="col-span-2 sm:col-span-2">Status</span>
            <span className="col-span-0 sm:col-span-1 text-right">Created</span>
          </div>
          {currentList.map((project) => {
            const statusLabel = project.status === "approved" ? "Approved" : "Pending";
            const statusClass =
              project.status === "approved"
                ? "bg-emerald-500/15 text-emerald-200"
                : "bg-yellow-500/15 text-yellow-200";

            return (
              <div
                key={project._id}
                className="grid grid-cols-12 gap-4 px-6 py-4 border-t border-white/10 text-sm"
              >
                <div className="col-span-4 sm:col-span-4 space-y-1">
                  <p className="font-semibold text-white">{project.title}</p>
                  <p className="text-xs text-white/50 line-clamp-2">{project.description}</p>
                </div>
                <div className="col-span-3 sm:col-span-2 text-white/70">
                  {project.owner?.name || "—"}
                </div>
                <div className="col-span-3 sm:col-span-3 flex flex-col gap-1 text-white/60">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-300 hover:underline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-purple-300 hover:underline"
                    >
                      Live
                    </a>
                  )}
                  {!project.repoUrl && !project.demoUrl && "—"}
                </div>
                <div className="col-span-2 sm:col-span-2 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusClass}`}>
                    {statusLabel}
                  </span>
                  {project.status !== "approved" && (
                    <button
                      type="button"
                      onClick={() => approveProject(project._id)}
                      className="px-3 py-1 rounded-full border border-white/10 text-xs text-white/70 hover:text-white"
                    >
                      Approve
                    </button>
                  )}
                </div>
                <div className="col-span-0 sm:col-span-1 text-right text-white/60 hidden sm:block">
                  {formatDate(project.createdAt)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default AdminProjects;
