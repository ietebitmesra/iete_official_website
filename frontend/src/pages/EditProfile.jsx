import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiGet, apiPut } from "../lib/api";
import { useAuth } from "../context/AuthContext.jsx";

const EditProfile = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const [formState, setFormState] = useState({
    bio: "",
    branch: "",
    batchYear: "",
    portfolioUrl: "",
    githubUsername: "",
    linkedinUrl: "",
    leetCodeUsername: "",
    codeforcesHandle: "",
    skills: "",
  });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await apiGet("/auth/me", token);
        const user = data.user || {};
        setFormState({
          bio: user.bio || "",
          branch: user.branch || "",
          batchYear: user.batchYear ?? "",
          portfolioUrl: user.portfolioUrl || "",
          githubUsername: user.githubUsername || "",
          linkedinUrl: user.linkedinUrl || "",
          leetCodeUsername: user.leetCodeUsername || "",
          codeforcesHandle: user.codeforcesHandle || "",
          skills: Array.isArray(user.skills) ? user.skills.join(", ") : "",
        });
      } catch (err) {
        setError(err.message || "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      loadProfile();
    }
  }, [token]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const skills = formState.skills
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    setSubmitting(true);
    try {
      await apiPut(
        "/user/me",
        {
          bio: formState.bio.trim(),
          branch: formState.branch.trim(),
          batchYear: formState.batchYear ? Number(formState.batchYear) : undefined,
          portfolioUrl: formState.portfolioUrl.trim(),
          githubUsername: formState.githubUsername.trim(),
          linkedinUrl: formState.linkedinUrl.trim(),
          leetCodeUsername: formState.leetCodeUsername.trim(),
          codeforcesHandle: formState.codeforcesHandle.trim(),
          skills,
        },
        token
      );
      setSuccess("Profile updated successfully.");
      setTimeout(() => navigate("/profile"), 800);
    } catch (err) {
      setError(err.message || "Failed to update profile.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10 text-sm text-white/60">
        Loading profile...
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-white/55 uppercase tracking-[0.2em]">Profile</p>
        <h1 className="text-3xl font-semibold">Edit Profile</h1>
        <p className="text-white/55">Keep your profile up to date for the community.</p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 md:col-span-2">
            <label htmlFor="bio" className="text-sm text-white/70">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formState.bio}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="Tell us about yourself"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="branch" className="text-sm text-white/70">
              Branch
            </label>
            <input
              id="branch"
              name="branch"
              value={formState.branch}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="CSE"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="batchYear" className="text-sm text-white/70">
              Batch Year
            </label>
            <input
              id="batchYear"
              name="batchYear"
              type="number"
              value={formState.batchYear}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="2026"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="portfolioUrl" className="text-sm text-white/70">
              Portfolio URL
            </label>
            <input
              id="portfolioUrl"
              name="portfolioUrl"
              value={formState.portfolioUrl}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="https://"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="githubUsername" className="text-sm text-white/70">
              GitHub Username
            </label>
            <input
              id="githubUsername"
              name="githubUsername"
              value={formState.githubUsername}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="octocat"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="linkedinUrl" className="text-sm text-white/70">
              LinkedIn URL
            </label>
            <input
              id="linkedinUrl"
              name="linkedinUrl"
              value={formState.linkedinUrl}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="https://linkedin.com/in/"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="leetCodeUsername" className="text-sm text-white/70">
              LeetCode Username
            </label>
            <input
              id="leetCodeUsername"
              name="leetCodeUsername"
              value={formState.leetCodeUsername}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="leetcode-handle"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="codeforcesHandle" className="text-sm text-white/70">
              Codeforces Handle
            </label>
            <input
              id="codeforcesHandle"
              name="codeforcesHandle"
              value={formState.codeforcesHandle}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="cf-handle"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="skills" className="text-sm text-white/70">
              Skills (comma separated)
            </label>
            <input
              id="skills"
              name="skills"
              value={formState.skills}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-white outline-none focus:border-purple-400"
              placeholder="React, Node.js, MongoDB"
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-300">{error}</p>}
        {success && <p className="text-sm text-emerald-300">{success}</p>}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2 rounded-full bg-purple-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:bg-purple-400 transition disabled:opacity-60"
          >
            {submitting ? "Saving..." : "Save Changes"}
          </button>
          <Link
            to="/profile"
            className="px-6 py-2 rounded-full border border-white/10 text-white/70 hover:text-white text-center"
          >
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
