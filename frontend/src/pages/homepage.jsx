import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Events from "../components/Events";
import logo from "/logo.png";

const stats = [
  { label: "Active Members", value: "120+" },
  { label: "Projects Shipped", value: "30" },
  { label: "Events / Year", value: "15" },
];

const quickLinks = [
  { title: "Projects", desc: "Verified builds from the chapter", to: "/projects" },
  { title: "Leaderboard", desc: "Coding, dev, research highlights", to: "/leaderboard" },
  { title: "Resources", desc: "ECE/EEE curated learning hub", to: "/resources" },
];

export default function HomePage() {
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);
  const splineUrl = useMemo(
    () => `https://my.spline.design/boxeshover-ev1uKPCZ6mXpRnteiJT32KCt/?t=${Date.now()}`,
    []
  );

  useEffect(() => {
    // no-op: useMemo already seeds a cache-busting param
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Spline Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <iframe
            src={splineUrl}
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            title="IETE Spline Background"
            loading="eager"
            allow="pointer-lock; camera; microphone; autoplay"
            style={{
              transform: "scale(clamp(1.05, 1vw + 1, 1.18))",
              transformOrigin: "center",
            }}
            onLoad={() => setIsSplineLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65 pointer-events-none" />
          {!isSplineLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <div className="text-white text-lg">Loading experience...</div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 w-full max-w-[88rem] mx-auto px-6 lg:px-10 py-16 flex flex-col gap-12 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <div className="space-y-6">
              <img src={logo} alt="IETE Logo" className="h-24 md:h-32 lg:h-36 w-auto block" />
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">BIT Mesra</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[0.9]">
                  IETE Student's Chapter
                </h1>
                <p className="text-lg md:text-xl text-[var(--muted)] max-w-xl">
                  Electronics, telecom, and computing community powering projects, competitions, and research.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/auth/register" className="btn-primary pointer-events-auto">
                  Join the chapter
                </Link>
                <Link to="/events" className="btn-secondary pointer-events-auto">
                  View events
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((item) => (
                    <div key={item.label} className="card-surface p-5 text-center bg-[var(--card)]/80 border-[var(--border)] min-h-[140px] flex flex-col justify-center gap-2">
                      <div className="text-2xl md:text-3xl font-bold">{item.value}</div>
                      <div className="text-xs text-[var(--muted)] uppercase tracking-[0.15em] leading-snug">{item.label}</div>
                  </div>
                ))}
              </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickLinks.map((card) => (
                  <Link
                    key={card.title}
                      to={card.to}
                      className="card-surface p-5 bg-[var(--panel)]/80 border-[var(--border)] hover:-translate-y-1 transition flex flex-col gap-3 min-h-[200px] pointer-events-auto"
                  >
                      <div className="text-xs md:text-sm uppercase tracking-[0.2em] text-[var(--muted)] leading-tight">{card.title}</div>
                      <div className="text-base font-semibold leading-snug break-words">{card.desc}</div>
                      <span className="text-[var(--glow)] text-sm mt-auto">Open →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Events />
    </>
  );
}