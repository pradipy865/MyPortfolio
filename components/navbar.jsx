"use client"

import { useState } from "react"

const navItems = [
  { href: "#home", label: "HOME" },
  { href: "#services", label: "SERVICES" },
  { href: "#resume", label: "RESUME" },
  { href: "#work", label: "WORK" },
  { href: "#contact", label: "CONTACT" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0f1115]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold tracking-wide">
          <span className="text-white">Pradip</span>
          <span className="text-[#22c55e]"> .</span>
          <span className="sr-only">Go to Home</span>
        </a>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md border border-[#22c55e]/50 bg-[#0f1115] px-3 py-2 text-sm text-white hover:bg-[#22c55e] hover:text-black transition-colors"
          >
            HIRE ME
          </a>
        </nav>

        <button
          aria-label="Toggle Menu"
          className="md:hidden rounded border border-white/10 p-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <nav className="mx-4 mb-3 grid gap-2 rounded-lg border border-white/10 bg-[#111319] p-3">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-md border border-[#22c55e]/50 bg-[#0f1115] px-3 py-2 text-sm text-white hover:bg-[#22c55e] hover:text-black"
            >
              HIRE ME
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
