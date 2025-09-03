"use client"

import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ state: "idle", msg: "" })

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ state: "loading", msg: "Sending..." })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed")
      setStatus({ state: "success", msg: "Thanks! I’ll get back to you soon." })
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      setStatus({ state: "error", msg: err.message })
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-2 text-white/70">Let’s build something great together</p>

      <form
        onSubmit={onSubmit}
        className="mt-8 grid gap-4 rounded-lg border border-white/10 bg-[#111319] p-5 sm:grid-cols-2"
      >
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm text-white/80">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="rounded-md border border-white/10 bg-[#0f1115] px-3 py-2 text-white outline-none focus:border-[#22c55e]"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm text-white/80">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="rounded-md border border-white/10 bg-[#0f1115] px-3 py-2 text-white outline-none focus:border-[#22c55e]"
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2 grid gap-2">
          <label htmlFor="message" className="text-sm text-white/80">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="rounded-md border border-white/10 bg-[#0f1115] px-3 py-2 text-white outline-none focus:border-[#22c55e]"
            placeholder="Tell me about your project..."
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status.state === "loading"}
            className="w-full rounded-md border border-[#22c55e]/60 bg-[#22c55e] px-4 py-2 font-medium text-black hover:brightness-110 disabled:opacity-60"
          >
            {status.state === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status.state !== "idle" && (
            <p className={`mt-3 text-sm ${status.state === "error" ? "text-red-400" : "text-white/80"}`}>
              {status.msg}
            </p>
          )}
        </div>
      </form>
    </div>
  )
}
