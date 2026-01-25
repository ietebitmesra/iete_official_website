import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[var(--panel)]/80 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IETE Students Chapter</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Building an ecosystem for electronics, telecom, and computing students at BIT Mesra.
            </p>
            <p className="text-sm text-[var(--muted)]">
              Email: iete@bitmesra.ac.in
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/80 hover:text-white" to="/events">Events</Link></li>
              <li><Link className="text-white/80 hover:text-white" to="/projects">Projects</Link></li>
              <li><Link className="text-white/80 hover:text-white" to="/leaderboard">Leaderboard</Link></li>
              <li><Link className="text-white/80 hover:text-white" to="/resources">Resources</Link></li>
              <li><Link className="text-white/80 hover:text-white" to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">Chapter</h4>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-white/80 hover:text-white" to="/team">Team</Link></li>
              <li><Link className="text-white/80 hover:text-white" to="/alumni">Alumni</Link></li>
              <li><Link className="text-white/80 hover:text-white" to="/about">About</Link></li>
              <li><Link className="text-white/80 hover:text-white" to="/auth/register">Join</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[var(--muted)]">Updates</h4>
            <p className="text-sm text-[var(--muted)]">Get event announcements and project spotlights.</p>
            <div className="flex flex-wrap gap-2">
              <input
                type="email"
                placeholder="you@bitmesra.ac.in"
                className="w-full sm:flex-1 bg-[var(--bg)]/70 border border-[var(--border)] rounded-xl px-4 py-2 text-sm text-white"
              />
              <button className="btn-primary text-sm px-4 py-2 whitespace-nowrap">Subscribe</button>
            </div>
            <p className="text-xs text-[var(--muted)]">By subscribing you agree to receive emails from IETE.</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] text-sm text-[var(--muted)] flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} IETE Students Chapter BIT Mesra. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;