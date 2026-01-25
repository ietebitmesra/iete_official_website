import React from 'react'

const highlights = [
  {
    title: 'Embedded Bootcamp: Sensors → Systems',
    date: 'Oct 2025',
    tag: 'Highlights',
    desc: 'Hands-on build sprint covering sensor interfaces, firmware, and data pipelines with live demos.',
  },
  {
    title: 'Robotics Lab Day',
    date: 'Sep 2025',
    tag: 'Highlights',
    desc: 'Drive stacks, control loops, and testing rigs built by student teams using lab toolchains.',
  },
  {
    title: 'Applied ML for Devices',
    date: 'Aug 2025',
    tag: 'Highlights',
    desc: 'From dataset creation to deployment on edge hardware with measurable benchmarks.',
  },
]

const upcoming = [
  {
    title: 'PCB Design Studio',
    date: 'Feb 2026',
    focus: 'EDA → fabrication → bring-up',
  },
  {
    title: 'IoT Build Camp',
    date: 'Mar 2026',
    focus: 'Embedded networking + cloud telemetry',
  },
  {
    title: 'Research-to-Prototype Demo Day',
    date: 'Apr 2026',
    focus: 'Publishable work, live demos, open-source repos',
  },
]

const Events = () => {
  return (
    <section className="relative w-full min-h-screen p-8 overflow-hidden bg-[var(--bg)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/60 to-black/80" />
        <div className="absolute -top-28 -left-20 h-64 w-64 rounded-full bg-[var(--brand)]/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[var(--glow)]/15 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[var(--muted)] bg-white/5 border border-[var(--border)] px-4 py-2 rounded-full">
            Events & Highlights
          </span>
          <h2 className="mt-6 pb-2 text-4xl md:text-6xl font-bold leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand)] via-[#6b7cff] to-[var(--glow)] relative z-10">
            Build, demo, publish
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto">
            A quick snapshot of what we’ve shipped recently and what’s coming next for builders and researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)]/70 p-8 md:p-10 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white">Recent highlights</h3>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Last 12 months</span>
              </div>
              <div className="space-y-5">
                {highlights.map((event) => (
                  <div
                    key={event.title}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--panel)]/70 p-5 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-lg font-semibold text-white">{event.title}</h4>
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{event.date}</span>
                    </div>
                    <p className="text-gray-300">{event.desc}</p>
                    <span className="w-fit text-xs uppercase tracking-[0.25em] text-[var(--glow)] bg-white/5 border border-[var(--border)] px-3 py-1 rounded-full">
                      {event.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-6">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--panel)]/70 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">Upcoming</h3>
              <div className="space-y-4">
                {upcoming.map((event) => (
                  <div key={event.title} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-white font-semibold">{event.title}</div>
                      <div className="text-sm text-gray-300">{event.focus}</div>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{event.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--brand)]/20 via-white/5 to-[var(--glow)]/10 p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-2">Want to present?</h3>
              <p className="text-gray-200">
                Share a prototype, research poster, or competition build. We spotlight working systems and publishable work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events