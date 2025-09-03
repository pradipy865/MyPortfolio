"use client"

import { links } from "../lib/links"

export default function Hero() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-8">
      <div className="space-y-6">
        <p className="text-sm tracking-wide text-[#22c55e]">Software Engineer</p>
        <h1 className="text-pretty text-4xl font-semibold leading-tight sm:text-5xl">
          Hello I'm <span className="text-[#22c55e]">Pradip Yadav</span>
        </h1>
        <p className="max-w-xl text-white/70 leading-relaxed">
          As a tech-savvy student, I build innovative software projects, solve complex problems, and create
          user‑friendly solutions. I bridge theory and practice through web development and explore new tools to tackle
          real‑world challenges.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={links.resume || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#22c55e] bg-transparent px-4 py-2 text-sm text-white hover:bg-[#22c55e] hover:text-black transition"
          >
            Download Resume
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>

          <a
            href={links.github || "#"}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10"
          >
            Github
          </a>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <SocialIcon href={links.linkedin} label="LinkedIn">
            <LinkedInIcon />
          </SocialIcon>
          <SocialIcon href={links.github} label="GitHub">
            <GitHubIcon />
          </SocialIcon>
          <SocialIcon href={links.twitter} label="Twitter">
            <TwitterIcon />
          </SocialIcon>
        </div>

        <div className="grid grid-cols-3 gap-6 pt-4">
          <Stat number="10" label="Projects completed" />
          <Stat number="8" label="Technologies Mastered" />
          <Stat number="500" label="Code commits" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative h-72 w-72 md:h-80 md:w-80">
          <div className="absolute inset-0 rounded-full border-2 border-[#22c55e]/40" />
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-[#22c55e]/70 animate-spin-slow" />
          <div className="absolute inset-8 rounded-full border-2 border-dashed border-[#22c55e]/40 animate-spin-slower" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="h-48 w-48 rounded-full bg-gradient-to-br from-[#1a1f2a] to-[#10131a] shadow-inner"
              aria-hidden
            />
            <span className="sr-only">Portrait placeholder</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-4xl font-extrabold tracking-tight">{number}</div>
      <div className="mt-1 text-xs uppercase tracking-wide text-white/60">{label}</div>
    </div>
  )
}

function SocialIcon({ href, children, label }) {
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full border border-[#22c55e]/40 p-2 text-[#22c55e] hover:bg-[#22c55e] hover:text-black transition"
    >
      {children}
    </a>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.94 6.5A2.44 2.44 0 1 1 6.93 1.6a2.44 2.44 0 0 1 0 4.9zM2.7 8.1h4.5v13.8H2.7zM13 8.1c-2.53 0-4.3 1.67-4.3 3.58v10.22h4.5v-9.1c0-1 .73-1.7 1.87-1.7 1.1 0 1.82.7 1.82 1.68v9.12H21.5V12.3c0-2.58-1.95-4.2-4.68-4.2-1.84 0-3.1.86-3.82 1.9H13z" />
    </svg>
  )
}
function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12.3c0 5 3.2 9.1 7.6 10.6.56.1.77-.24.77-.53v-1.9c-3.1.7-3.8-1.5-3.8-1.5-.5-1.3-1.3-1.6-1.3-1.6-1-.7.07-.7.07-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.9-.8.9-.8-.9-.2-1.8-.9-1.8-2 0-1 .4-1.7 1-2.2-1 0-2.1-.6-2.1-2.6 0-.6.2-1.1.5-1.6-.1-.1-.4-1.3.1-2.8 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.5.2 2.7.1 2.8.3.5.5 1 .5 1.7 0 2-1.1 2.6-2.1 2.6.6.5 1 1.3 1 2.6v3.9c0 .3.2.6.7.5A11.5 11.5 0 0 0 23.5 12C23.5 5.8 18.3.5 12 .5z" />
    </svg>
  )
}
function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.5 6.1c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.8 3.6 11.2 11.2 0 0 1-8.1-4.1 4 4 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1c0 2 1.5 3.7 3.4 4-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.1A8.1 8.1 0 0 1 2 18.8 11.4 11.4 0 0 0 8.1 20c7.4 0 11.5-6.1 11.5-11.5v-.5c.8-.6 1.5-1.3 1.9-2.1z" />
    </svg>
  )
}
