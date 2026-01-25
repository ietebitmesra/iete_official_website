import React from 'react'

const About = () => {
  return (
    <section className="relative w-full min-h-screen p-8 overflow-hidden bg-[var(--bg)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/80" />
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[var(--brand)]/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--glow)]/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)] bg-white/5 border border-[var(--border)] px-4 py-2 rounded-full">
            About IETE
          </span>
          <h2 className="mt-6 pb-2 text-4xl md:text-6xl font-bold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-[#6b7cff] to-[var(--glow)] relative z-20 drop-shadow-[0_6px_18px_rgba(0,0,0,0.65)]">
            Engineering that ships
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7">
            <div className="card-surface bg-[var(--card)]/70 border-[var(--border)] p-8 md:p-10 rounded-3xl shadow-lg space-y-5">
              <p className="text-gray-200 text-lg leading-relaxed">
                IETE Students' Chapter at BIT Mesra is where electronics and embedded builders turn ideas into working
                systems. We work across robotics, IoT, signal processing, and hardware–software co-design, using lab
                toolchains that take you from schematics and firmware to data and deployment.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                Members prototype boards, ship embedded stacks, train applied ML for devices, and publish demos, papers,
                and open-source builds. Research and shipped projects come first; competitions follow as proof, not the
                goal.
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                If you’re a first-year exploring sensors or a senior building publishable systems, you’ll find
                senior→junior mentorship, peer reviews, and a bias toward shipping.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)]/70 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-3">Focus stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Embedded systems",
                  "Robotics",
                  "IoT",
                  "Signal processing",
                  "Hardware–software co-design",
                  "Applied ML for devices",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)] bg-white/5 border border-[var(--border)] rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)]/70 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-3">How we work</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--glow)]" />
                  <span>Prototype → test → iterate with lab-grade toolchains.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--glow)]" />
                  <span>Ship demos and publish open-source results.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--glow)]" />
                  <span>Mentorship and peer design reviews.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--brand)]/20 via-white/5 to-[var(--glow)]/10 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Outcome-first culture</h3>
              <p className="text-gray-200">
                We measure success by working systems and publishable results—not just attendance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
