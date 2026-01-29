import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../lib/api";
import { useAuth } from "../context/AuthContext.jsx";

const SubmitProject = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!title.trim() || !description.trim()) {
      setError("Title and description are required.");
      return;
    }

    const techStack = technologies
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    setLoading(true);
    try {
      await apiPost(
        "/projects",
        {
          title: title.trim(),
          description: description.trim(),
          technologies: techStack,
          githubUrl: githubUrl.trim() || undefined,
          liveUrl: liveUrl.trim() || undefined,
        },
        token
      );
      setSuccess("Project submitted for approval");
      navigate("/dashboard/projects");
    } catch (err) {
      setError(err.message || "Failed to submit project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-white/55 uppercase tracking-[0.2em]">Projects</p>
        <h1 className="text-3xl md:text-4xl font-semibold">Submit your project</h1>
        <p className="text-white/55">Share your work with the community and get it approved.</p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5"
      >
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm text-white/70">
            Title
          </label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
            placeholder="Project title"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm text-white/70">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
            placeholder="Describe your project"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="technologies" className="text-sm text-white/70">
            Technologies (comma separated)
          </label>
          <input
            id="technologies"
            name="technologies"
            value={technologies}
            onChange={(event) => setTechnologies(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
            placeholder="React, Node.js, MongoDB"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="githubUrl" className="text-sm text-white/70">
              GitHub URL
            </label>
            <input
              id="githubUrl"
              name="githubUrl"
              value={githubUrl}
              onChange={(event) => setGithubUrl(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="https://github.com/"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="liveUrl" className="text-sm text-white/70">
              Live URL
            </label>
            <input
              id="liveUrl"
              name="liveUrl"
              value={liveUrl}
              onChange={(event) => setLiveUrl(event.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="https://"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-300">{error}</p>}
        {success && <p className="text-sm text-emerald-300">{success}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto px-6 py-2 rounded-full bg-purple-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:bg-purple-400 transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Project"}
        </button>
      </form>
    </section>
  );
};

export default SubmitProject;
