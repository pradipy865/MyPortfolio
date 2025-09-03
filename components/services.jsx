export default function Services() {
  const items = [
    { title: "Full-Stack Web Apps", desc: "End-to-end MERN applications with clean architecture and scalability." },
    { title: "API Design", desc: "RESTful APIs with robust validation, security, and performance." },
    { title: "UI & UX", desc: "Responsive, accessible, and modern interfaces using React + Tailwind." },
  ]
  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-balance text-3xl font-semibold">Services</h2>
      <p className="mt-2 text-white/70">What I can help you build</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="rounded-lg border border-white/10 bg-[#111319] p-5 hover:border-[#22c55e]/50 transition"
          >
            <h3 className="text-lg font-medium">{it.title}</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
