"use client"

import useSWR from "swr"

const fetcher = (url) => fetch(url).then((r) => r.json())

export default function Work() {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher)

  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-semibold">Work</h2>
      <p className="mt-2 text-white/70">Selected projects</p>

      {isLoading && <p className="mt-6 text-white/70">Loading projects...</p>}
      {error && <p className="mt-6 text-red-400">Failed to load projects.</p>}

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data?.projects?.map((p) => (
          <article key={p._id || p.title} className="flex flex-col rounded-lg border border-white/10 bg-[#111319] p-4">
            <div className="aspect-video w-full rounded-md bg-white/5" aria-hidden />
            <h3 className="mt-4 text-lg font-medium">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm text-white/70 leading-relaxed">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-2 py-1 text-xs text-white/70">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-3">
              {p.githubUrl && (
                <a
                  className="text-sm text-[#22c55e] hover:underline"
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              )}
              {p.liveUrl && (
                <a className="text-sm text-[#22c55e] hover:underline" href={p.liveUrl} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
