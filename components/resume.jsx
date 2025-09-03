export default function Resume() {
  const items = [
    
    {
      time: "2020-2021",
      title: "Class-12th",
      org: "Vidyadham Junior Science College,Aurangabad",
      desc: "95.6%,JEE Mains-99.53 Percentile",
    },
    {
      time: "2022-2026",
      title: "B.Tech In Information Technology",
      org: "IIIT Allahabad",
      desc: "Focused on full-stack development and Problem Solving",
    },
  ]
  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-semibold">Resume</h2>
      <div className="mt-8 grid gap-6">
        {items.map((it) => (
          <article
            key={it.title}
            className="grid gap-2 rounded-lg border border-white/10 bg-[#111319] p-5 md:grid-cols-[160px_1fr]"
          >
            <div className="text-sm text-[#22c55e]">{it.time}</div>
            <div>
              <h3 className="text-lg font-medium">
                {it.title} · <span className="text-white/70">{it.org}</span>
              </h3>
              <p className="mt-2 text-white/70 leading-relaxed">{it.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
