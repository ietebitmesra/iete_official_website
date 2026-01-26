import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const Profile = () => {
  const { user, loading } = useAuth();
  const [isFlipped, setIsFlipped] = useState(false);

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-10 text-sm text-[var(--muted)]">
        Loading...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const initials = (user?.name || user?.email || "U")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const joinDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-10 text-white">
      <header className="space-y-2">
        <p className="text-sm text-accent uppercase tracking-[0.2em]">My Profile</p>
        <h1 className="text-3xl md:text-4xl font-bold">My Profile</h1>
        <p className="text-textMuted">Manage your account settings</p>
      </header>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[rgba(169,65,210,0.25)] to-black/80 p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <p className="text-sm text-gray-300 uppercase tracking-[0.2em]">User overview</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent/40 to-accentBright/40 flex items-center justify-center text-xl font-semibold">
                  {initials}
                </div>
                <div className="min-w-0">
                  <p className="text-lg font-semibold">{user?.name || "User"}</p>
                  <p className="text-sm text-textMuted break-all">{user?.email || "No email"}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full border border-accent/40 bg-accentSoft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {user?.role || "user"}
                </span>
              </div>
            </div>

            <div className="border-b border-white/10 pb-4">
              <p className="text-sm text-gray-300 uppercase tracking-[0.2em]">Quick actions</p>
              <div className="mt-4 space-y-3">
                <button className="w-full text-left rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:border-accent/40 hover:text-accent transition">
                  View dashboard
                </button>
                <button className="w-full text-left rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:border-accent/40 hover:text-accent transition">
                  Explore resources
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Account details</h2>
            <p className="text-sm text-textMuted mt-1">Personal and contact information</p>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-accent uppercase tracking-[0.15em]">Name</p>
                <p className="text-base font-semibold">{user?.name || "Not provided"}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-accent uppercase tracking-[0.15em]">Email</p>
                <p className="text-base font-semibold break-all">{user?.email || "Not provided"}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-accent uppercase tracking-[0.15em]">Role</p>
                <p className="text-base font-semibold">{user?.role || "user"}</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-accent uppercase tracking-[0.15em]">Joined</p>
                <p className="text-base font-semibold">{joinDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-3">
            <h3 className="text-base font-semibold">Membership status</h3>
            <p className="text-sm text-textMuted">
              Your membership is active. Keep an eye on upcoming events and exclusive member updates.
            </p>
            <span className="inline-flex w-fit items-center rounded-full border border-accent/40 bg-accentSoft px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Active
            </span>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-base font-semibold">Membership ID card</h3>
            <div className="mt-4 flex items-center justify-center">
              <button
                type="button"
                className="[perspective:1200px]"
                onClick={() => setIsFlipped((prev) => !prev)}
              >
                <div
                  className={`relative h-48 w-72 transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-xl border border-white/10 bg-white/5 p-5 [backface-visibility:hidden]">
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-accent uppercase tracking-[0.15em]">Member ID</p>
                      <span className="text-[10px] text-textMuted">Tap to flip</span>
                    </div>
                    <p className="mt-4 text-lg font-semibold">IETE-{user?._id?.slice(-6) || "000000"}</p>
                    <p className="text-xs text-textMuted mt-2">Issued: {joinDate}</p>
                  </div>
                  <div className="absolute inset-0 rounded-xl border border-dashed border-white/10 bg-white/5 p-5 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-xs text-accent uppercase tracking-[0.2em]">QR</p>
                    <div className="mt-4 h-24 w-24 rounded-lg border border-white/10 flex items-center justify-center text-[10px] text-textMuted">
                      Coming soon
                    </div>
                    <p className="text-[10px] text-textMuted mt-4">For event check-ins</p>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 space-y-4">
            <h3 className="text-base font-semibold">Linked accounts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-sm text-textMuted">Google</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent">Connected</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-sm text-textMuted">LinkedIn</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-textMuted">Not linked</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                <span className="text-sm text-textMuted">GitHub</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-textMuted">Not linked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
